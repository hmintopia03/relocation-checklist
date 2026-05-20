"use client";

import { create } from "zustand";
import { createSeedStorageData, flattenPhases, hydratePhases, loadData, saveData } from "./persistence";
import type { Phase, RelocationTask, TaskStatus } from "./types";

export type PhaseDraft = Omit<Phase, "id" | "tasks"> & {
  id?: string;
};

export type TaskDraft = Omit<RelocationTask, "id" | "status"> & {
  id?: string;
  status?: TaskStatus;
};

type RelocationState = {
  phases: Phase[];
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
  deleteTask: (phaseId: string, taskId: string) => void;
  setTaskStatus: (phaseId: string, taskId: string, status: TaskStatus) => void;
  completeTask: (phaseId: string, taskId: string) => void;
  hydrateData: () => void;
  replaceData: (phases: Phase[]) => void;
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
});

const persistPhases = (phases: Phase[]) => {
  const data = flattenPhases(phases);
  saveData(data);
  return data.updatedAt;
};

export const useRelocationStore = create<RelocationState>()((set, get) => ({
  phases: createSeedStorageData().phases.map((phase) => ({ ...phase, tasks: [] })),
  selectedPhaseId: createSeedStorageData().phases[0]?.id ?? "",
  hasHydrated: false,
  clearPersistenceError: () => set({ persistenceError: undefined }),
  selectPhase: (phaseId) => set({ selectedPhaseId: phaseId }),
  hydrateData: () => {
    const loaded = loadData();
    const phases = hydratePhases(loaded.data);
    set({
      phases,
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
        return { phases, selectedPhaseId: id, lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, selectedPhaseId: id, persistenceError: error instanceof Error ? error.message : "Could not save phase." };
      }
    }),
  updatePhase: (phaseId, patch) =>
    set((state) => {
      const phases = state.phases.map((phase) => (phase.id === phaseId ? { ...phase, ...patch } : phase));
      try {
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
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
        return { phases, selectedPhaseId: phases[0]?.id ?? "", lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, selectedPhaseId: phases[0]?.id ?? "", persistenceError: error instanceof Error ? error.message : "Could not delete phase." };
      }
    }),
  addTask: (phaseId, task) =>
    set((state) => {
      const phases = state.phases.map((phase) => (phase.id === phaseId ? { ...phase, tasks: [...phase.tasks, sanitizeTask(task)] } : phase));
      try {
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task." };
      }
    }),
  addTasks: (phaseId, tasks) =>
    set((state) => {
      const sanitizedTasks = tasks.map(sanitizeTask);
      const phases = state.phases.map((phase) => (phase.id === phaseId ? { ...phase, tasks: [...phase.tasks, ...sanitizedTasks] } : phase));
      try {
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save tasks." };
      }
    }),
  updateTask: (phaseId, taskId, patch) =>
    set((state) => {
      const phases = state.phases.map((phase) =>
        phase.id === phaseId
          ? {
              ...phase,
              tasks: phase.tasks.map((task) => (task.id === taskId ? { ...task, ...patch, title: patch.title?.trim() || task.title } : task)),
            }
          : phase,
      );
      try {
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not save task." };
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
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
      } catch (error) {
        return { phases, persistenceError: error instanceof Error ? error.message : "Could not delete task." };
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
        return { phases, lastSavedAt: persistPhases(phases), persistenceError: undefined };
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
        return { phases, lastCompletedTaskId: task.status === "completed" ? undefined : taskId, lastSavedAt: persistPhases(phases), persistenceError: undefined };
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
  replaceData: (phases) => {
    const selectedPhaseId = phases[0]?.id ?? "";
    try {
      set({ phases, selectedPhaseId, lastSavedAt: persistPhases(phases), persistenceError: undefined });
    } catch (error) {
      set({ persistenceError: error instanceof Error ? error.message : "Could not restore backup." });
    }
  },
  resetToSampleData: () => {
    const data = createSeedStorageData();
    const phases = hydratePhases(data);
    try {
      saveData(data);
      set({ phases, selectedPhaseId: phases[0]?.id ?? "", lastSavedAt: data.updatedAt, persistenceError: undefined });
    } catch (error) {
      set({ persistenceError: error instanceof Error ? error.message : "Could not reset sample data." });
    }
  },
}));
