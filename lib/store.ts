"use client";

import { create } from "zustand";
import { createSeedStorageData, flattenData, hydratePhases, loadData, saveData } from "./persistence";
import type { InventoryCategory, InventoryItem, InventoryTopic, PackingContainer, Phase, RelocationTask, TaskStatus } from "./types";

export type PhaseDraft = Omit<Phase, "id" | "tasks"> & {
  id?: string;
};

export type TaskDraft = Omit<RelocationTask, "id" | "status"> & {
  id?: string;
  status?: TaskStatus;
};

export type InventoryItemDraft = Omit<InventoryItem, "id"> & {
  id?: string;
};

type RelocationState = {
  phases: Phase[];
  inventoryCategories: InventoryCategory[];
  inventoryTopics: InventoryTopic[];
  inventoryItems: InventoryItem[];
  packingContainers: PackingContainer[];
  selectedPhaseId: string;
  hasHydrated: boolean;
  persistenceError?: string;
  lastSavedAt?: string;
  lastCompletedTaskId?: string;
  lastUnlockedTaskId?: string;
  lastCompletedPhaseId?: string;
  selectPhase: (phaseId: string) => void;
  addPhase: (phase: PhaseDraft) => void;
  updatePhase: (phaseId: string, patch: Partial<Phase>) => void;
  deletePhase: (phaseId: string) => void;
  addTask: (phaseId: string, task: TaskDraft) => void;
  addTasks: (phaseId: string, tasks: TaskDraft[]) => void;
  updateTask: (phaseId: string, taskId: string, patch: Partial<RelocationTask>) => void;
  reorderTasks: (phaseId: string, orderedTaskIds: string[]) => void;
  deleteTask: (phaseId: string, taskId: string) => void;
  deleteTasks: (taskIds: string[]) => void;
  setTaskStatus: (phaseId: string, taskId: string, status: TaskStatus) => void;
  completeTask: (phaseId: string, taskId: string) => void;
  addInventoryCategory: (name: string) => void;
  updateInventoryCategory: (categoryId: string, name: string) => void;
  addInventoryItem: (item: InventoryItemDraft) => void;
  updateInventoryItem: (itemId: string, patch: Partial<InventoryItem>) => void;
  deleteInventoryItem: (itemId: string) => void;
  deleteInventoryItems: (itemIds: string[]) => void;
  addInventoryTopic: (categoryId: string, name: string) => void;
  updateInventoryTopic: (topicId: string, name: string) => void;
  deleteInventoryTopic: (topicId: string) => void;
  assignInventoryItem: (itemId: string, containerId?: string) => void;
  reorderUnassignedItems: (orderedItemIds: string[]) => void;
  toggleInventoryPacked: (itemId: string) => void;
  hydrateData: () => void;
  replaceData: (phases: Phase[], inventoryCategories?: InventoryCategory[], inventoryItems?: InventoryItem[], packingContainers?: PackingContainer[], inventoryTopics?: InventoryTopic[]) => void;
  resetToSampleData: () => void;
  clearPersistenceError: () => void;
};

const makeId = (prefix: string) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const getAllTasks = (phases: Phase[]) => phases.flatMap((phase) => phase.tasks.map((task) => ({ ...task, phaseId: phase.id, phaseTitle: phase.title })));

export const getPhaseProgress = (phase: Phase) => {
  if (!phase.tasks.length) return 0;
  return Math.round((phase.tasks.filter((task) => task.status === "completed").length / phase.tasks.length) * 100);
};

export const isTaskUnlocked = (task: RelocationTask, phases: Phase[]) => {
  if (!task.dependsOn?.length) return true;
  const allTasks = getAllTasks(phases);
  return task.dependsOn.every((id) => allTasks.find((item) => item.id === id)?.status === "completed");
};

export const getEffectiveTaskStatus = (task: RelocationTask, phases: Phase[]): TaskStatus | "locked" => {
  if (!isTaskUnlocked(task, phases)) return "locked";
  return task.status;
};

const sanitizeTask = (task: TaskDraft): RelocationTask => ({
  id: task.id ?? makeId("task"),
  title: task.title.trim() || "Untitled checkpoint",
  note: task.note?.trim(),
  deadline: task.deadline,
  status: task.status ?? "available",
  dependsOn: task.dependsOn?.filter(Boolean),
  createdAt: task.createdAt ?? new Date().toISOString(),
  order: task.order ?? 0,
});

const getNextTaskOrder = (tasks: RelocationTask[], deadline: string) => Math.max(-1, ...tasks.filter((task) => task.deadline === deadline).map((task) => task.order ?? 0)) + 1;

const sanitizeInventoryItem = (item: InventoryItemDraft): InventoryItem => ({
  id: item.id ?? makeId("item"),
  name: item.name.trim() || "Untitled item",
  categoryId: item.categoryId,
  topicId: item.topicId || undefined,
  topic: item.topic?.trim() || undefined,
  quantity: item.quantity.trim() || "1",
  status: item.status,
  buyLocation: item.buyLocation,
  transportStatus: item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring"),
  priority: item.priority,
  notes: item.notes?.trim(),
  containerId: (item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring")) === "bring" ? item.containerId || undefined : undefined,
  packed: (item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring")) === "bring" ? item.packed ?? false : false,
  packingOrder: item.packingOrder ?? 0,
});

const getNextPackingOrder = (items: InventoryItem[]) => Math.max(-1, ...items.filter((item) => !item.containerId).map((item) => item.packingOrder ?? 0)) + 1;

const getNextTopicOrder = (topics: InventoryTopic[], categoryId: string) => Math.max(-1, ...topics.filter((topic) => topic.categoryId === categoryId).map((topic) => topic.order ?? 0)) + 1;

const persistData = (phases: Phase[], inventoryCategories: InventoryCategory[], inventoryItems: InventoryItem[], packingContainers: PackingContainer[], inventoryTopics: InventoryTopic[]) => {
  const data = flattenData(phases, inventoryCategories, inventoryItems, packingContainers, inventoryTopics);
  saveData(data);
  return data.updatedAt;
};

export const useRelocationStore = create<RelocationState>()((set, get) => ({
  phases: createSeedStorageData().phases.map((phase) => ({ ...phase, tasks: [] })),
  inventoryCategories: createSeedStorageData().inventoryCategories,
  inventoryTopics: createSeedStorageData().inventoryTopics,
  inventoryItems: createSeedStorageData().inventoryItems,
  packingContainers: createSeedStorageData().packingContainers,
  selectedPhaseId: createSeedStorageData().phases[0]?.id ?? "",
  hasHydrated: false,
  clearPersistenceError: () => set({ persistenceError: undefined }),
  selectPhase: (phaseId) => set({ selectedPhaseId: phaseId }),
  hydrateData: () => {
    const loaded = loadData();
    const phases = hydratePhases(loaded.data);
    set({
      phases,
      inventoryCategories: loaded.data.inventoryCategories,
      inventoryTopics: loaded.data.inventoryTopics,
      inventoryItems: loaded.data.inventoryItems,
      packingContainers: loaded.data.packingContainers,
      selectedPhaseId: phases[0]?.id ?? "",
      persistenceError: loaded.error,
      lastSavedAt: loaded.status === "error" ? undefined : loaded.data.updatedAt,
      hasHydrated: true,
    });
  },
  addPhase: (phase) =>
    set((state) => {
      const id = makeId("phase");
      const phases = [
        ...state.phases,
        {
          id,
          title: phase.title.trim() || "New Phase",
          description: phase.description.trim() || "Describe this stage of the journey.",
          startDate: phase.startDate,
          endDate: phase.endDate,
          tasks: [],
        },
      ];
      try {
        return { phases, selectedPhaseId: id, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, selectedPhaseId: id, persistenceError: error instanceof Error ? error.message : "Could not save phase." };
      }
    }),
  updatePhase: (phaseId, patch) =>
    set((state) => {
      const phases = state.phases.map((phase) => (phase.id === phaseId ? { ...phase, ...patch } : phase));
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save phase." };
      }
    }),
  deletePhase: (phaseId) =>
    set((state) => {
      if (state.phases.length <= 1) return state;
      const deletedTaskIds = state.phases.find((phase) => phase.id === phaseId)?.tasks.map((task) => task.id) ?? [];
      const phases = state.phases
        .filter((phase) => phase.id !== phaseId)
        .map((phase) => ({
          ...phase,
          tasks: phase.tasks.map((task) => ({
            ...task,
            dependsOn: task.dependsOn?.filter((id) => !deletedTaskIds.includes(id)),
          })),
        }));
      try {
        return { phases, selectedPhaseId: phases[0]?.id ?? "", lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, selectedPhaseId: phases[0]?.id ?? "", persistenceError: error instanceof Error ? error.message : "Could not delete phase." };
      }
    }),
  addTask: (phaseId, task) =>
    set((state) => {
      const phases = state.phases.map((phase) => (phase.id === phaseId ? { ...phase, tasks: [...phase.tasks, sanitizeTask({ ...task, order: getNextTaskOrder(phase.tasks, task.deadline) })] } : phase));
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task." };
      }
    }),
  addTasks: (phaseId, tasks) =>
    set((state) => {
      const phases = state.phases.map((phase) => {
        if (phase.id !== phaseId) return phase;
        const nextOrders = new Map<string, number>();
        const sanitizedTasks = tasks.map((task) => {
          const nextOrder = nextOrders.get(task.deadline) ?? getNextTaskOrder(phase.tasks, task.deadline);
          nextOrders.set(task.deadline, nextOrder + 1);
          return sanitizeTask({ ...task, order: nextOrder });
        });
        return { ...phase, tasks: [...phase.tasks, ...sanitizedTasks] };
      });
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save tasks." };
      }
    }),
  updateTask: (phaseId, taskId, patch) =>
    set((state) => {
      const phases = state.phases.map((phase) => {
        if (phase.id !== phaseId) return phase;
        return {
          ...phase,
          tasks: phase.tasks.map((task) => {
            if (task.id !== taskId) return task;
            const deadlineChanged = typeof patch.deadline === "string" && patch.deadline !== task.deadline && patch.order === undefined;
            return { ...task, ...patch, order: deadlineChanged ? getNextTaskOrder(phase.tasks, patch.deadline as string) : patch.order ?? task.order, title: patch.title?.trim() || task.title };
          }),
        };
      });
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task." };
      }
    }),
  reorderTasks: (phaseId, orderedTaskIds) =>
    set((state) => {
      const orderedSet = new Set(orderedTaskIds);
      const phases = state.phases.map((phase) => {
        if (phase.id !== phaseId) return phase;
        const orderedTasks = orderedTaskIds.map((id) => phase.tasks.find((task) => task.id === id)).filter((task): task is RelocationTask => Boolean(task));
        let index = 0;
        return {
          ...phase,
          tasks: phase.tasks.map((task) => (orderedSet.has(task.id) ? { ...orderedTasks[index], order: index++ } : task)),
        };
      });
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task order." };
      }
    }),
  deleteTask: (phaseId, taskId) =>
    set((state) => {
      const phases = state.phases.map((phase) => ({
        ...phase,
        tasks:
          phase.id === phaseId
            ? phase.tasks.filter((task) => task.id !== taskId).map((task) => ({ ...task, dependsOn: task.dependsOn?.filter((id) => id !== taskId) }))
            : phase.tasks.map((task) => ({ ...task, dependsOn: task.dependsOn?.filter((id) => id !== taskId) })),
      }));
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not delete task." };
      }
    }),
  deleteTasks: (taskIds) =>
    set((state) => {
      const deletedIds = new Set(taskIds);
      if (!deletedIds.size) return state;
      const phases = state.phases.map((phase) => ({
        ...phase,
        tasks: phase.tasks
          .filter((task) => !deletedIds.has(task.id))
          .map((task) => ({
            ...task,
            dependsOn: task.dependsOn?.filter((id) => !deletedIds.has(id)),
          })),
      }));
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not delete selected tasks." };
      }
    }),
  setTaskStatus: (phaseId, taskId, status) =>
    set((state) => {
      const phases = state.phases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              tasks: phase.tasks.map((task) => (task.id === taskId && (status !== "completed" || isTaskUnlocked(task, state.phases)) ? { ...task, status } : task)),
            }
          : phase,
      );
      try {
        return { phases, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task status." };
      }
    }),
  completeTask: (phaseId, taskId) => {
    const beforePhases = get().phases;
    const task = beforePhases.find((phase) => phase.id === phaseId)?.tasks.find((item) => item.id === taskId);
    if (!task || !isTaskUnlocked(task, beforePhases)) return;
    const wasPhaseComplete = getPhaseProgress(beforePhases.find((phase) => phase.id === phaseId) ?? beforePhases[0]) === 100;
    const beforeUnlocked = getAllTasks(beforePhases).filter((item) => isTaskUnlocked(item, beforePhases)).map((item) => item.id);

    set((state) => {
      const phases = state.phases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              tasks: phase.tasks.map((item) => (item.id === taskId ? { ...item, status: (item.status === "completed" ? "available" : "completed") as TaskStatus } : item)),
            }
          : phase,
      );
      try {
        return { phases, lastCompletedTaskId: task.status === "completed" ? undefined : taskId, lastSavedAt: persistData(phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task completion." };
      }
    });

    const afterPhases = get().phases;
    const unlocked = getAllTasks(afterPhases).find((item) => !beforeUnlocked.includes(item.id) && isTaskUnlocked(item, afterPhases));
    const afterPhase = afterPhases.find((phase) => phase.id === phaseId);
    if (unlocked) set({ lastUnlockedTaskId: unlocked.id });
    if (!wasPhaseComplete && afterPhase && getPhaseProgress(afterPhase) === 100) set({ lastCompletedPhaseId: phaseId });
  },
  addInventoryCategory: (name) =>
    set((state) => {
      const cleanName = name.trim();
      if (!cleanName) return state;
      const inventoryCategories = [...state.inventoryCategories, { id: makeId("category"), name: cleanName }];
      try {
        return { inventoryCategories, lastSavedAt: persistData(state.phases, inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryCategories, persistenceError: error instanceof Error ? error.message : "Could not add category." };
      }
    }),
  updateInventoryCategory: (categoryId, name) =>
    set((state) => {
      const cleanName = name.trim();
      if (!cleanName) return state;
      const inventoryCategories = state.inventoryCategories.map((category) => (category.id === categoryId ? { ...category, name: cleanName } : category));
      try {
        return { inventoryCategories, lastSavedAt: persistData(state.phases, inventoryCategories, state.inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryCategories, persistenceError: error instanceof Error ? error.message : "Could not rename category." };
      }
    }),
  addInventoryItem: (item) =>
    set((state) => {
      const inventoryItems = [...state.inventoryItems, sanitizeInventoryItem({ ...item, packingOrder: item.packingOrder ?? getNextPackingOrder(state.inventoryItems) })];
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not save inventory item." };
      }
    }),
  updateInventoryItem: (itemId, patch) =>
    set((state) => {
      const inventoryItems = state.inventoryItems.map((item) => (item.id === itemId ? sanitizeInventoryItem({ ...item, ...patch, id: item.id }) : item));
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not update inventory item." };
      }
    }),
  deleteInventoryItem: (itemId) =>
    set((state) => {
      const inventoryItems = state.inventoryItems.filter((item) => item.id !== itemId);
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not delete inventory item." };
      }
    }),
  deleteInventoryItems: (itemIds) =>
    set((state) => {
      const deletedIds = new Set(itemIds);
      if (!deletedIds.size) return state;
      const inventoryItems = state.inventoryItems.filter((item) => !deletedIds.has(item.id));
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not delete selected inventory items." };
      }
    }),
  addInventoryTopic: (categoryId, name) =>
    set((state) => {
      const cleanName = name.trim();
      if (!cleanName) return state;
      const inventoryTopics = [...state.inventoryTopics, { id: makeId("topic"), categoryId, name: cleanName, order: getNextTopicOrder(state.inventoryTopics, categoryId) }];
      try {
        return { inventoryTopics, lastSavedAt: persistData(state.phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryTopics, persistenceError: error instanceof Error ? error.message : "Could not save topic." };
      }
    }),
  updateInventoryTopic: (topicId, name) =>
    set((state) => {
      const cleanName = name.trim();
      if (!cleanName) return state;
      const inventoryTopics = state.inventoryTopics.map((topic) => (topic.id === topicId ? { ...topic, name: cleanName } : topic));
      try {
        return { inventoryTopics, lastSavedAt: persistData(state.phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryTopics, persistenceError: error instanceof Error ? error.message : "Could not rename topic." };
      }
    }),
  deleteInventoryTopic: (topicId) =>
    set((state) => {
      if (state.inventoryItems.some((item) => item.topicId === topicId)) return state;
      const inventoryTopics = state.inventoryTopics.filter((topic) => topic.id !== topicId);
      try {
        return { inventoryTopics, lastSavedAt: persistData(state.phases, state.inventoryCategories, state.inventoryItems, state.packingContainers, inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryTopics, persistenceError: error instanceof Error ? error.message : "Could not delete topic." };
      }
    }),
  assignInventoryItem: (itemId, containerId) =>
    set((state) => {
      const inventoryItems = state.inventoryItems.map((item) => (item.id === itemId && (item.transportStatus ?? "bring") === "bring" ? { ...item, containerId: containerId || undefined, packed: Boolean(containerId), packingOrder: containerId ? item.packingOrder : getNextPackingOrder(state.inventoryItems.filter((candidate) => candidate.id !== itemId)) } : item));
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not assign inventory item." };
      }
    }),
  reorderUnassignedItems: (orderedItemIds) =>
    set((state) => {
      const orderedSet = new Set(orderedItemIds);
      const inventoryItems = state.inventoryItems.map((item) => (orderedSet.has(item.id) ? { ...item, packingOrder: orderedItemIds.indexOf(item.id) } : item));
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not save packing order." };
      }
    }),
  toggleInventoryPacked: (itemId) =>
    set((state) => {
      const inventoryItems = state.inventoryItems.map((item) => (item.id === itemId ? { ...item, packed: !item.packed } : item));
      try {
        return { inventoryItems, lastSavedAt: persistData(state.phases, state.inventoryCategories, inventoryItems, state.packingContainers, state.inventoryTopics), persistenceError: undefined };
      } catch (error) {
        return { inventoryItems, persistenceError: error instanceof Error ? error.message : "Could not update packed status." };
      }
    }),
  replaceData: (phases, inventoryCategories, inventoryItems, packingContainers, inventoryTopics) => {
    const selectedPhaseId = phases[0]?.id ?? "";
    try {
      set((state) => {
        const nextCategories = inventoryCategories ?? state.inventoryCategories;
        const nextItems = inventoryItems ?? state.inventoryItems;
        const nextContainers = packingContainers ?? state.packingContainers;
        const nextTopics = inventoryTopics ?? state.inventoryTopics;
        return {
          phases,
          inventoryCategories: nextCategories,
          inventoryTopics: nextTopics,
          inventoryItems: nextItems,
          packingContainers: nextContainers,
          selectedPhaseId,
          lastSavedAt: persistData(phases, nextCategories, nextItems, nextContainers, nextTopics),
          persistenceError: undefined,
        };
      });
    } catch (error) {
      set({ persistenceError: error instanceof Error ? error.message : "Could not restore backup." });
    }
  },
  resetToSampleData: () => {
    const data = createSeedStorageData();
    const phases = hydratePhases(data);
    try {
      saveData(data);
      set({ phases, inventoryCategories: data.inventoryCategories, inventoryTopics: data.inventoryTopics, inventoryItems: data.inventoryItems, packingContainers: data.packingContainers, selectedPhaseId: phases[0]?.id ?? "", lastSavedAt: data.updatedAt, persistenceError: undefined });
    } catch (error) {
      set({ persistenceError: error instanceof Error ? error.message : "Could not reset sample data." });
    }
  },
}));
