"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import {
  Archive,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  GripVertical,
  Backpack,
  Luggage,
  ListChecks,
  Map,
  Package,
  Pencil,
  Plane,
  Plus,
  ShoppingBag,
  Settings,
  Trash2,
  X,
} from "lucide-react";
import { BulkAddTasks } from "@/components/BulkAddTasks";
import { DataSafetyPanel } from "@/components/DataSafetyPanel";
import { PhaseModal } from "@/components/PhaseModal";
import { ProgressBar } from "@/components/ProgressBar";
import { TaskModal } from "@/components/TaskModal";
import { TaskTextModal } from "@/components/TaskTextModal";
import { formatDateRange, formatShortDate, isOverdue } from "@/lib/date";
import { getAllTasks, getPhaseProgress, isTaskUnlocked, useRelocationStore } from "@/lib/store";
import type { BuyLocation, InventoryCategory, InventoryItem, InventoryPriority, InventoryStatus, PackingContainer, Phase, RelocationTask, TaskStatus, ViewMode } from "@/lib/types";

type TaskEditor = { phaseId: string; task?: RelocationTask; mode?: "full" | "text" } | null;
type TaskWithPhase = RelocationTask & { phaseId: string; phaseTitle: string };

const navItems: Array<{ id: ViewMode; label: string; icon: React.ReactNode }> = [
  { id: "timeline", label: "Progress", icon: <Map /> },
  { id: "categories", label: "Categories", icon: <ListChecks /> },
  { id: "packing", label: "Packing", icon: <Archive /> },
  { id: "tasks", label: "All Tasks", icon: <ListChecks /> },
  { id: "archive", label: "Archive", icon: <Archive /> },
];

export default function Home() {
  const {
    phases,
    inventoryCategories,
    inventoryItems,
    packingContainers,
    selectedPhaseId,
    persistenceError,
    lastSavedAt,
    lastCompletedTaskId,
    lastUnlockedTaskId,
    lastCompletedPhaseId,
    selectPhase,
    addPhase,
    updatePhase,
    deletePhase,
    addTask,
    addTasks,
    updateTask,
    reorderTasks,
    deleteTask,
    deleteTasks,
    setTaskStatus,
    completeTask,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
    deleteInventoryItems,
    assignInventoryItem,
    reorderUnassignedItems,
    replaceData,
    resetToSampleData,
    hydrateData,
  } = useRelocationStore();

  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const [taskFilter, setTaskFilter] = useState<"all" | "available" | "in_progress" | "completed">("all");
  const [phaseEditor, setPhaseEditor] = useState<Phase | "new" | null>(null);
  const [taskEditor, setTaskEditor] = useState<TaskEditor>(null);
  const [isBulkAddOpen, setBulkAddOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    hydrateData();
  }, [hydrateData]);

  const selectedPhase = phases.find((phase) => phase.id === selectedPhaseId) ?? phases[0];
  const allTasks = useMemo(() => getAllTasks(phases), [phases]);
  const completedTasks = allTasks.filter((task) => task.status === "completed");
  const activeTasks = allTasks.filter((task) => task.status !== "completed");
  const overallProgress = allTasks.length ? Math.round((completedTasks.length / allTasks.length) * 100) : 0;
  const dependencyTitle = useMemo(() => new globalThis.Map(allTasks.map((task) => [task.id, task.title])), [allTasks]);
  const recentCompleted = completedTasks.slice(-3).reverse();
  const taskPhase = taskEditor ? phases.find((phase) => phase.id === taskEditor.phaseId) : undefined;
  const hasQuestData = phases.length > 0;
  const phaseTasks: TaskWithPhase[] = selectedPhase?.tasks.map((task) => ({ ...task, phaseId: selectedPhase.id, phaseTitle: selectedPhase.title })) ?? [];
  const visiblePhaseTasks = phaseTasks.filter((task) => taskFilter === "all" || task.status === taskFilter);

  const openTaskEditor = (phaseId: string, task?: RelocationTask, mode: "full" | "text" = "full") => setTaskEditor({ phaseId, task, mode });
  const confirmDeleteTask = (phaseId: string, taskId: string) => {
    if (window.confirm("Delete this task? This cannot be undone unless you restore a backup.")) deleteTask(phaseId, taskId);
  };
  const confirmDeletePhase = (phaseId: string) => {
    if (window.confirm("Delete this phase and its tasks? This cannot be undone unless you restore a backup.")) deletePhase(phaseId);
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-ink">
      <div className="mx-auto grid min-h-screen w-full max-w-[1480px] gap-4 px-3 py-3 md:px-4 lg:grid-cols-[238px_minmax(0,1fr)_260px] lg:py-5">
        <Sidebar
          phases={phases}
          selectedPhaseId={selectedPhaseId}
          viewMode={viewMode}
          onViewChange={setViewMode}
          onPhaseSelect={(id) => {
            selectPhase(id);
            setViewMode("timeline");
          }}
          onAddPhase={() => setPhaseEditor("new")}
          onOpenSettings={() => setSettingsOpen(true)}
        />

        <section className="order-1 min-w-0 lg:order-2 lg:py-1">
          {!hasQuestData ? (
          <EmptyRecovery error={persistenceError} phases={phases} inventoryCategories={inventoryCategories} inventoryItems={inventoryItems} packingContainers={packingContainers} lastSavedAt={lastSavedAt} onRestore={replaceData} onReset={resetToSampleData} />
          ) : (
            <AnimatePresence mode="sync">
              {viewMode === "timeline" && selectedPhase && (
                <motion.div key="phase-workspace" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }} className="space-y-5">
                  <PhaseHero
                    phase={selectedPhase}
                    phases={phases}
                    progress={getPhaseProgress(selectedPhase)}
                    onPhaseSelect={selectPhase}
                    onEdit={() => setPhaseEditor(selectedPhase)}
                    onDelete={() => confirmDeletePhase(selectedPhase.id)}
                  />

                  {lastCompletedPhaseId && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.16 }} className="rounded-2xl border border-accent/20 bg-accent/8 px-4 py-3 text-sm font-medium text-ink">
                      Phase cleared. The route ahead is a little lighter now.
                    </motion.div>
                  )}

                  <TaskWorkspace
                    title="Tasks"
                    tasks={visiblePhaseTasks}
                    phases={phases}
                    dependencyTitle={dependencyTitle}
                    filter={taskFilter}
                    onFilterChange={setTaskFilter}
                    lastCompletedTaskId={lastCompletedTaskId}
                    lastUnlockedTaskId={lastUnlockedTaskId}
                    onAddTask={() => openTaskEditor(selectedPhase.id)}
                    onBulkAdd={() => setBulkAddOpen(true)}
                    onEditTask={openTaskEditor}
                    onEditDate={(phaseId, taskId, deadline) => updateTask(phaseId, taskId, { deadline })}
                    onDeleteTask={confirmDeleteTask}
                    onDeleteTasks={deleteTasks}
                    onComplete={completeTask}
                    onStatusChange={setTaskStatus}
                    onReorderTasks={reorderTasks}
                  />
                </motion.div>
              )}

              {viewMode === "categories" && (
                <motion.div key="categories" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }}>
                  <CategoriesView categories={inventoryCategories} items={inventoryItems} onAddItem={addInventoryItem} onUpdateItem={updateInventoryItem} onDeleteItem={deleteInventoryItem} onDeleteItems={deleteInventoryItems} />
                </motion.div>
              )}

              {viewMode === "packing" && (
                <motion.div key="packing" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }}>
                  <PackingView categories={inventoryCategories} items={inventoryItems} containers={packingContainers} onAssign={assignInventoryItem} onDeleteItem={deleteInventoryItem} onReorderUnassigned={reorderUnassignedItems} />
                </motion.div>
              )}

              {viewMode === "tasks" && (
                <motion.div key="tasks" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }}>
                  <TaskWorkspace
                    title="All open checkpoints"
                    tasks={activeTasks}
                    phases={phases}
                    dependencyTitle={dependencyTitle}
                    filter="all"
                    onFilterChange={() => undefined}
                    lastCompletedTaskId={lastCompletedTaskId}
                    lastUnlockedTaskId={lastUnlockedTaskId}
                    onAddTask={() => openTaskEditor(selectedPhase.id)}
                    onBulkAdd={() => setBulkAddOpen(true)}
                    onEditTask={openTaskEditor}
                    onEditDate={(phaseId, taskId, deadline) => updateTask(phaseId, taskId, { deadline })}
                    onDeleteTask={confirmDeleteTask}
                    onDeleteTasks={deleteTasks}
                    onComplete={completeTask}
                    onStatusChange={setTaskStatus}
                  />
                </motion.div>
              )}

              {viewMode === "archive" && (
                <motion.div key="archive" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }}>
                  <TaskWorkspace
                    title="Completed archive"
                    tasks={completedTasks}
                    phases={phases}
                    dependencyTitle={dependencyTitle}
                    filter="completed"
                    onFilterChange={() => undefined}
                    lastCompletedTaskId={lastCompletedTaskId}
                    lastUnlockedTaskId={lastUnlockedTaskId}
                    onAddTask={() => openTaskEditor(selectedPhase.id)}
                    onBulkAdd={() => setBulkAddOpen(true)}
                    onEditTask={openTaskEditor}
                    onEditDate={(phaseId, taskId, deadline) => updateTask(phaseId, taskId, { deadline })}
                    onDeleteTask={confirmDeleteTask}
                    onDeleteTasks={deleteTasks}
                    onComplete={completeTask}
                    onStatusChange={setTaskStatus}
                    empty="Completed checkpoints will collect here."
                    hideAdd
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </section>

        <RightRail overallProgress={overallProgress} completedTasks={completedTasks.length} totalTasks={allTasks.length} nextTasks={activeTasks.filter((task) => isTaskUnlocked(task, phases)).slice(0, 3)} recentCompleted={recentCompleted} onOpenSettings={() => setSettingsOpen(true)} />
      </div>

      <AnimatePresence>
        {phaseEditor && (
          <PhaseModal
            phase={phaseEditor === "new" ? undefined : phaseEditor}
            onClose={() => setPhaseEditor(null)}
            onSubmit={(phase) => {
              if (phaseEditor === "new") addPhase(phase);
              else updatePhase(phaseEditor.id, phase);
              setPhaseEditor(null);
            }}
          />
        )}
        {taskEditor && taskPhase && taskEditor.mode === "text" && taskEditor.task ? (
          <TaskTextModal
            phase={taskPhase}
            task={taskEditor.task}
            onClose={() => setTaskEditor(null)}
            onSubmit={(task) => {
              updateTask(taskEditor.phaseId, taskEditor.task!.id, task);
              setTaskEditor(null);
            }}
          />
        ) : taskEditor && taskPhase ? (
          <TaskModal
            phase={taskPhase}
            phases={phases}
            task={taskEditor.task}
            onClose={() => setTaskEditor(null)}
            onSubmit={(task) => {
              if (taskEditor.task) updateTask(taskEditor.phaseId, taskEditor.task.id, task);
              else addTask(taskEditor.phaseId, task);
              setTaskEditor(null);
            }}
          />
        ) : null}
        {isBulkAddOpen && (
          <BulkAddTasks
            phases={phases}
            defaultPhaseId={selectedPhase?.id ?? phases[0]?.id ?? ""}
            onClose={() => setBulkAddOpen(false)}
            onCreate={(phaseId, tasks) => addTasks(phaseId, tasks)}
          />
        )}
        {isSettingsOpen && (
          <UtilityDrawer phases={phases} inventoryCategories={inventoryCategories} inventoryItems={inventoryItems} packingContainers={packingContainers} error={persistenceError} lastSavedAt={lastSavedAt} onClose={() => setSettingsOpen(false)} onRestore={replaceData} onReset={resetToSampleData} />
        )}
      </AnimatePresence>
    </main>
  );
}

function Sidebar({
  phases,
  selectedPhaseId,
  viewMode,
  onViewChange,
  onPhaseSelect,
  onAddPhase,
  onOpenSettings,
}: {
  phases: Phase[];
  selectedPhaseId: string;
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  onPhaseSelect: (id: string) => void;
  onAddPhase: () => void;
  onOpenSettings: () => void;
}) {
  return (
    <aside className="order-2 rounded-[1.35rem] border border-black/8 bg-white/68 p-4 shadow-[0_12px_34px_rgba(23,23,23,0.035)] backdrop-blur-xl lg:sticky lg:top-5 lg:order-1 lg:h-[calc(100vh-2.5rem)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent/10 text-accent">
          <Plane className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-lg font-semibold leading-tight">Relocation Quest</h1>
          <p className="text-xs font-medium text-black/42">Seoul to Berlin</p>
        </div>
      </div>

      <nav className="mt-7 grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`inline-flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition ${
              viewMode === item.id ? "bg-accent/10 text-accent" : "text-black/42 hover:bg-black/[0.035] hover:text-ink"
            }`}
          >
            <span className="[&_svg]:h-4 [&_svg]:w-4">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Phases</p>
          <button onClick={onAddPhase} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent" aria-label="Add phase">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-1">
          {phases.map((phase) => {
            const active = phase.id === selectedPhaseId;
            const progress = getPhaseProgress(phase);
            return (
              <button key={phase.id} onClick={() => onPhaseSelect(phase.id)} className={`w-full rounded-xl px-3 py-2.5 text-left transition ${active ? "bg-accent/8 text-ink ring-1 ring-accent/20" : "text-black/42 hover:bg-black/[0.035] hover:text-ink"}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`truncate text-sm ${active ? "font-semibold" : "font-medium"}`}>{phase.title}</span>
                  <span className={`h-2 w-2 rounded-full ${progress === 100 ? "bg-accent/60" : active ? "bg-accent/35" : "bg-black/18"}`} />
                </div>
                <p className={`mt-1 text-xs ${active ? "text-black/42" : "text-black/38"}`}>{progress}% {" · "} {formatDateRange(phase.startDate, phase.endDate)}</p>
              </button>
            );
          })}
        </div>
      </div>
      <button onClick={onOpenSettings} className="mt-7 inline-flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-semibold text-black/42 transition hover:bg-black/[0.035] hover:text-ink">
        <Settings className="h-4 w-4" />
        Settings
      </button>
    </aside>
  );
}

function PhaseHero({
  phase,
  phases,
  progress,
  onPhaseSelect,
  onEdit,
  onDelete,
}: {
  phase: Phase;
  phases: Phase[];
  progress: number;
  onPhaseSelect: (id: string) => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <section className="overflow-hidden rounded-[1.7rem] border border-black/8 bg-white/92 shadow-[0_18px_54px_rgba(23,23,23,0.055)] backdrop-blur-xl">
      <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-start">
        <div className="grid h-16 w-16 place-items-center rounded-[1.2rem] bg-accent/10 text-accent">
          <Plane className="h-8 w-8" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-black/42">{formatDateRange(phase.startDate, phase.endDate)}</p>
          <h2 className="mt-1 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">{phase.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-black/56">{phase.description}</p>
          <JourneyLine phases={phases} activePhaseId={phase.id} onSelect={onPhaseSelect} />
        </div>
        <div className="min-w-48 rounded-2xl bg-paper/45 p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span className="text-black/40">Phase</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
          <div className="mt-4 flex justify-end gap-2">
            <button onClick={onEdit} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent" aria-label="Edit phase">
              <Pencil className="h-4 w-4" />
            </button>
            <button onClick={onDelete} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-red-400 hover:text-red-500" aria-label="Delete phase">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyLine({ phases, activePhaseId, onSelect }: { phases: Phase[]; activePhaseId: string; onSelect: (id: string) => void }) {
  const railRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: "auto", block: "nearest", inline: "center" });
  }, [activePhaseId]);

  return (
    <div className="relative mt-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white/90 to-transparent" />
      <div ref={railRef} className="flex snap-x items-stretch gap-3 overflow-x-auto scroll-smooth pb-2 pl-1 pr-6 no-scrollbar">
        {phases.map((item, index) => {
          const active = item.id === activePhaseId;
          const done = getPhaseProgress(item) === 100;
          return (
            <button
              key={item.id}
              ref={active ? activeRef : undefined}
              onClick={() => onSelect(item.id)}
              className={`group flex min-w-[190px] max-w-[260px] snap-start items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                active ? "border-accent/35 bg-accent/8 shadow-[0_10px_28px_rgba(15,143,104,0.10)]" : "border-black/8 bg-white/70 hover:border-black/16"
              }`}
              aria-label={`Go to ${item.title}`}
            >
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition ${active ? "border-accent bg-accent text-white" : done ? "border-accent/30 bg-accent/10 text-accent" : "border-black/12 bg-white text-black/35 group-hover:border-black/25"}`}>
                {done ? <Check className="h-3.5 w-3.5" /> : index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block whitespace-normal text-sm font-semibold leading-5 ${active ? "text-ink" : "text-black/58"}`}>{item.title}</span>
                <span className="mt-0.5 block text-xs text-black/38">{getPhaseProgress(item)}%</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TaskWorkspace(props: {
  title: string;
  tasks: TaskWithPhase[];
  phases: Phase[];
  dependencyTitle: Map<string, string>;
  filter: "all" | "available" | "in_progress" | "completed";
  onFilterChange: (filter: "all" | "available" | "in_progress" | "completed") => void;
  lastCompletedTaskId?: string;
  lastUnlockedTaskId?: string;
  onAddTask: () => void;
  onBulkAdd: () => void;
  onEditTask: (phaseId: string, task: RelocationTask, mode?: "full" | "text") => void;
  onEditDate: (phaseId: string, taskId: string, deadline: string) => void;
  onDeleteTask: (phaseId: string, taskId: string) => void;
  onDeleteTasks: (taskIds: string[]) => void;
  onComplete: (phaseId: string, taskId: string) => void;
  onStatusChange: (phaseId: string, taskId: string, status: TaskStatus) => void;
  onReorderTasks?: (phaseId: string, orderedTaskIds: string[]) => void;
  empty?: string;
  hideAdd?: boolean;
}) {
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);
  const taskGroups = useMemo(() => getTaskDateGroups(props.tasks), [props.tasks]);
  const selectedTaskIdSet = useMemo(() => new Set(selectedTaskIds), [selectedTaskIds]);

  useEffect(() => {
    const visibleIds = new Set(props.tasks.map((task) => task.id));
    setSelectedTaskIds((ids) => {
      const nextIds = ids.filter((id) => visibleIds.has(id));
      return nextIds.length === ids.length ? ids : nextIds;
    });
  }, [props.tasks]);

  const exitSelectionMode = () => {
    setSelectionMode(false);
    setSelectedTaskIds([]);
  };
  const selectAllVisibleTasks = () => {
    setSelectedTaskIds(props.tasks.map((task) => task.id));
  };
  const toggleSelectedTask = (taskId: string) => {
    setSelectedTaskIds((ids) => (ids.includes(taskId) ? ids.filter((id) => id !== taskId) : [...ids, taskId]));
  };
  const clearSelectedTasks = () => setSelectedTaskIds([]);
  const deleteSelectedTasks = () => {
    if (!selectedTaskIds.length) return;
    if (!window.confirm(`Delete ${selectedTaskIds.length} selected ${selectedTaskIds.length === 1 ? "task" : "tasks"}? This cannot be undone.`)) return;
    props.onDeleteTasks(selectedTaskIds);
    exitSelectionMode();
  };

  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{props.title}</h3>
        </div>
        {!props.hideAdd && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                if (selectionMode) exitSelectionMode();
                else {
                  setSelectionMode(true);
                  setSelectedTaskIds([]);
                }
              }}
              className={`inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${selectionMode ? "border-accent/20 bg-accent/[0.055] text-accent hover:bg-accent/10" : "border-black/10 bg-white/55 text-black/50 hover:border-accent/30 hover:text-accent"}`}
            >
              {selectionMode ? <X className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
              {selectionMode ? "Cancel selection" : "Select"}
            </button>
            <button disabled={selectionMode} onClick={props.onBulkAdd} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/30 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
              <ListChecks className="h-4 w-4" />
              Bulk add
            </button>
            <button disabled={selectionMode} onClick={props.onAddTask} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(15,143,104,0.12)] transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-black/20 disabled:shadow-none">
              <Plus className="h-4 w-4" />
              Add task
            </button>
          </div>
        )}
      </div>

      {!props.hideAdd && (
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            ["all", "All"],
            ["available", "To do"],
            ["in_progress", "In progress"],
            ["completed", "Done"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => props.onFilterChange(id as "all" | "available" | "in_progress" | "completed")} className={`h-9 rounded-full px-4 text-sm font-semibold transition ${props.filter === id ? "bg-accent/10 text-accent" : "bg-paper text-black/50 hover:text-ink"}`}>
              {label}
            </button>
          ))}
        </div>
      )}

      {selectionMode && (
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-accent/12 bg-accent/[0.045] px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-black/58">
            {selectedTaskIds.length} {selectedTaskIds.length === 1 ? "task" : "tasks"} selected
            <span className="ml-2 font-medium text-black/38">Completion is paused.</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={selectAllVisibleTasks} disabled={!props.tasks.length} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
              Select all visible
            </button>
            {selectedTaskIds.length > 0 && (
              <button type="button" onClick={deleteSelectedTasks} className="h-9 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Delete selected
              </button>
            )}
            {selectedTaskIds.length > 0 && (
              <button type="button" onClick={clearSelectedTasks} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent">
                Clear selection
              </button>
            )}
            <button type="button" onClick={exitSelectionMode} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent">
              Cancel selection
            </button>
          </div>
        </div>
      )}

      <div className="space-y-7">
        {taskGroups.length ? (
          taskGroups.map((group) => (
            <section key={group.key} className="relative">
              <div className="mb-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/32">Due</p>
                  <h4 className="mt-1 text-lg font-semibold text-ink">{group.label}</h4>
                </div>
                <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-black/40">
                  {group.tasks.length} {group.tasks.length === 1 ? "checkpoint" : "checkpoints"}
                </span>
              </div>
              <TaskReorderGroup group={group} phases={props.phases} dependencyTitle={props.dependencyTitle} lastCompletedTaskId={props.lastCompletedTaskId} lastUnlockedTaskId={props.lastUnlockedTaskId} selectionMode={selectionMode} selectedTaskIds={selectedTaskIdSet} onSelectTask={toggleSelectedTask} onComplete={props.onComplete} onStatusChange={props.onStatusChange} onEditTask={props.onEditTask} onEditDate={props.onEditDate} onDeleteTask={props.onDeleteTask} onReorderTasks={props.onReorderTasks} />
            </section>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-black/12 bg-white p-8 text-center text-sm text-black/45">{props.empty ?? "No checkpoints here yet."}</div>
        )}
      </div>
    </section>
  );
}

function getTaskDateGroups(tasks: TaskWithPhase[]) {
  const sortedTasks = [...tasks].sort((a, b) => {
    const dateCompare = (a.deadline || "9999-12-31").localeCompare(b.deadline || "9999-12-31");
    if (dateCompare !== 0) return dateCompare;
    return (a.order ?? 0) - (b.order ?? 0);
  });

  return sortedTasks.reduce<Array<{ key: string; label: string; tasks: TaskWithPhase[] }>>((groups, task) => {
    const key = task.deadline || "no-date";
    const existing = groups.find((group) => group.key === key);
    if (existing) {
      existing.tasks.push(task);
      return groups;
    }

    groups.push({
      key,
      label: task.deadline ? formatShortDate(task.deadline) : "No date",
      tasks: [task],
    });
    return groups;
  }, []);
}

type InventoryFilter = "all" | "already_have" | "need_to_buy" | "korea" | "germany";

const inventoryFilterLabels: Array<{ id: InventoryFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "already_have", label: "Already have" },
  { id: "need_to_buy", label: "Need to buy" },
  { id: "korea", label: "Buy in Korea" },
  { id: "germany", label: "Buy in Germany" },
];

const statusLabels: Record<InventoryStatus, string> = {
  already_have: "Already have",
  need_to_buy: "Need to buy",
  bought: "Bought",
  optional: "Optional",
  important: "Important",
};

const buyLocationLabels: Record<BuyLocation, string> = {
  none: "No buy plan",
  korea: "Buy in Korea",
  germany: "Buy in Germany",
};

function CategoriesView({ categories, items, onAddItem, onUpdateItem, onDeleteItem, onDeleteItems }: { categories: InventoryCategory[]; items: InventoryItem[]; onAddItem: (item: Omit<InventoryItem, "id"> & { id?: string }) => void; onUpdateItem: (itemId: string, patch: Partial<InventoryItem>) => void; onDeleteItem: (itemId: string) => void; onDeleteItems: (itemIds: string[]) => void }) {
  const [filter, setFilter] = useState<InventoryFilter>("all");
  const [editor, setEditor] = useState<{ categoryId: string; item?: InventoryItem } | null>(null);
  const [bulkEditor, setBulkEditor] = useState<{ categoryId?: string; topic?: string; fixedCategory?: boolean } | null>(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const visibleItems = useMemo(() => items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "korea" || filter === "germany") return item.buyLocation === filter;
    return item.status === filter;
  }), [filter, items]);
  const selectedItemIdSet = useMemo(() => new Set(selectedItemIds), [selectedItemIds]);

  useEffect(() => {
    const visibleIds = new Set(visibleItems.map((item) => item.id));
    setSelectedItemIds((ids) => {
      const nextIds = ids.filter((id) => visibleIds.has(id));
      return nextIds.length === ids.length ? ids : nextIds;
    });
  }, [visibleItems]);

  const exitSelectionMode = () => {
    setSelectionMode(false);
    setSelectedItemIds([]);
  };
  const selectAllVisibleItems = () => {
    setSelectedItemIds(visibleItems.map((item) => item.id));
  };
  const toggleSelectedItem = (itemId: string) => {
    setSelectedItemIds((ids) => (ids.includes(itemId) ? ids.filter((id) => id !== itemId) : [...ids, itemId]));
  };
  const clearSelectedItems = () => setSelectedItemIds([]);
  const deleteSelectedItems = () => {
    if (!selectedItemIds.length) return;
    if (!window.confirm(`Delete ${selectedItemIds.length} selected ${selectedItemIds.length === 1 ? "item" : "items"}? This cannot be undone.`)) return;
    onDeleteItems(selectedItemIds);
    exitSelectionMode();
  };

  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-black/42">Inventory</p>
          <h2 className="mt-1 text-3xl font-semibold">Categories</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">Organize belongings by stable home categories and buying decisions.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              if (selectionMode) exitSelectionMode();
              else {
                setSelectionMode(true);
                setSelectedItemIds([]);
              }
            }}
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${selectionMode ? "border-accent/20 bg-accent/[0.055] text-accent hover:bg-accent/10" : "border-black/10 bg-white/55 text-black/50 hover:border-accent/30 hover:text-accent"}`}
          >
            {selectionMode ? <X className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
            {selectionMode ? "Cancel selection" : "Select"}
          </button>
          <button disabled={selectionMode} onClick={() => setBulkEditor({})} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/30 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
            <ListChecks className="h-4 w-4" />
            Bulk add items
          </button>
        </div>
      </div>
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {inventoryFilterLabels.map((item) => (
          <button key={item.id} onClick={() => setFilter(item.id)} className={`h-9 shrink-0 rounded-full px-4 text-sm font-semibold transition ${filter === item.id ? "bg-accent/10 text-accent" : "bg-paper text-black/50 hover:text-ink"}`}>
            {item.label}
          </button>
        ))}
      </div>
      {selectionMode && (
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-accent/12 bg-accent/[0.045] px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-black/58">
            {selectedItemIds.length} {selectedItemIds.length === 1 ? "item" : "items"} selected
            <span className="ml-2 font-medium text-black/38">Item status is paused.</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={selectAllVisibleItems} disabled={!visibleItems.length} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
              Select all visible
            </button>
            {selectedItemIds.length > 0 && (
              <button type="button" onClick={deleteSelectedItems} className="h-9 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Delete selected
              </button>
            )}
            {selectedItemIds.length > 0 && (
              <button type="button" onClick={clearSelectedItems} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent">
                Clear selection
              </button>
            )}
            <button type="button" onClick={exitSelectionMode} className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/25 hover:text-accent">
              Cancel selection
            </button>
          </div>
        </div>
      )}
      <div className="space-y-3">
        {categories.map((category) => {
          const categoryItems = visibleItems.filter((item) => item.categoryId === category.id);
          const totalCount = items.filter((item) => item.categoryId === category.id).length;
          const topicGroups = groupInventoryByTopic(categoryItems);
          if (!categoryItems.length && filter !== "all") return null;
          return (
            <details key={category.id} open className="rounded-2xl border border-black/6 bg-paper/38 px-3 py-2.5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="min-w-0">
                  <span className="truncate text-base font-semibold">{category.name}</span>
                  <span className="ml-2 text-xs font-medium text-black/38">{totalCount} items</span>
                </span>
                <span className="flex shrink-0 items-center gap-1">
                  <button type="button" disabled={selectionMode} onClick={(event) => { event.preventDefault(); setBulkEditor({ categoryId: category.id, fixedCategory: true }); }} className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white/60 px-2.5 text-xs font-semibold text-black/48 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
                    <ListChecks className="h-3.5 w-3.5" />
                    Bulk
                  </button>
                  <button type="button" disabled={selectionMode} onClick={(event) => { event.preventDefault(); setEditor({ categoryId: category.id }); }} className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white/60 px-2.5 text-xs font-semibold text-black/48 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-35">
                    <Plus className="h-3.5 w-3.5" />
                    Add
                  </button>
                </span>
              </summary>
              <div className="mt-2 overflow-hidden rounded-xl bg-white/62">
                {topicGroups.map((group) => (
                  <div key={group.key} className="border-t border-black/[0.055] first:border-t-0">
                    <div className="flex items-center justify-between gap-2 px-2.5 py-1.5">
                      <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-black/34">{group.label}</p>
                      <button type="button" disabled={selectionMode} onClick={() => setBulkEditor({ categoryId: category.id, topic: group.key === "general" ? "" : group.label, fixedCategory: true })} className="inline-flex h-7 items-center gap-1 rounded-full px-2 text-xs font-semibold text-black/38 transition hover:bg-paper hover:text-accent disabled:cursor-not-allowed disabled:opacity-30">
                        <Plus className="h-3.5 w-3.5" />
                        Add lines
                      </button>
                    </div>
                    <div className="divide-y divide-black/[0.045]">
                      {group.items.map((item) => (
                        <InventoryItemRow key={item.id} item={item} selectionMode={selectionMode} selected={selectedItemIdSet.has(item.id)} onSelect={() => toggleSelectedItem(item.id)} onRename={(name) => onUpdateItem(item.id, { name })} onToggleStatus={() => onUpdateItem(item.id, { status: item.status === "already_have" ? "need_to_buy" : "already_have" })} onEdit={() => setEditor({ categoryId: category.id, item })} onDelete={() => { if (window.confirm("Delete this inventory item?")) onDeleteItem(item.id); }} />
                      ))}
                    </div>
                  </div>
                ))}
                {!categoryItems.length && <p className="rounded-xl bg-white/65 p-3 text-sm text-black/42">No items in this category yet.</p>}
              </div>
            </details>
          );
        })}
      </div>
      <AnimatePresence>
        {editor && (
          <InventoryItemModal
            categories={categories}
            defaultCategoryId={editor.categoryId}
            item={editor.item}
            onClose={() => setEditor(null)}
            onSubmit={(item) => {
              if (editor.item) onUpdateItem(editor.item.id, item);
              else onAddItem(item);
              setEditor(null);
            }}
          />
        )}
        {bulkEditor && (
          <BulkInventoryModal
            categories={categories}
            defaultCategoryId={bulkEditor.categoryId}
            defaultTopic={bulkEditor.topic}
            fixedCategory={bulkEditor.fixedCategory}
            onClose={() => setBulkEditor(null)}
            onSubmit={(drafts) => {
              drafts.forEach(onAddItem);
              setBulkEditor(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function groupInventoryByTopic(items: InventoryItem[]) {
  const groups = new globalThis.Map<string, { key: string; label: string; items: InventoryItem[] }>();
  for (const item of items) {
    const topic = item.topic?.trim();
    const key = topic ? topic.toLowerCase() : "general";
    const label = topic || "General";
    const existing = groups.get(key);
    if (existing) existing.items.push(item);
    else groups.set(key, { key, label, items: [item] });
  }
  return Array.from(groups.values());
}

function TaskReorderGroup({
  group,
  phases,
  dependencyTitle,
  lastCompletedTaskId,
  lastUnlockedTaskId,
  onComplete,
  onStatusChange,
  onEditTask,
  onEditDate,
  onDeleteTask,
  onReorderTasks,
  selectionMode,
  selectedTaskIds,
  onSelectTask,
}: {
  group: { key: string; label: string; tasks: TaskWithPhase[] };
  phases: Phase[];
  dependencyTitle: Map<string, string>;
  lastCompletedTaskId?: string;
  lastUnlockedTaskId?: string;
  onComplete: (phaseId: string, taskId: string) => void;
  onStatusChange: (phaseId: string, taskId: string, status: TaskStatus) => void;
  onEditTask: (phaseId: string, task: RelocationTask, mode?: "full" | "text") => void;
  onEditDate: (phaseId: string, taskId: string, deadline: string) => void;
  onDeleteTask: (phaseId: string, taskId: string) => void;
  onReorderTasks?: (phaseId: string, orderedTaskIds: string[]) => void;
  selectionMode: boolean;
  selectedTaskIds: Set<string>;
  onSelectTask: (taskId: string) => void;
}) {
  const phaseId = group.tasks[0]?.phaseId;
  const reorderEnabled = Boolean(!selectionMode && onReorderTasks && phaseId && group.tasks.every((task) => task.phaseId === phaseId));
  const sourceTaskIds = useMemo(() => group.tasks.map((task) => task.id), [group.tasks]);
  const [orderedTaskIds, setOrderedTaskIds] = useState(sourceTaskIds);
  const orderedTaskIdsRef = useRef(sourceTaskIds);
  const taskById = new globalThis.Map(group.tasks.map((task) => [task.id, task]));

  useEffect(() => {
    setOrderedTaskIds(sourceTaskIds);
    orderedTaskIdsRef.current = sourceTaskIds;
  }, [sourceTaskIds]);

  const setTransientOrder = (ids: string[]) => {
    orderedTaskIdsRef.current = ids;
    setOrderedTaskIds(ids);
  };

  const persistOrder = () => {
    if (!phaseId || !onReorderTasks) return;
    onReorderTasks(phaseId, orderedTaskIdsRef.current);
  };

  const renderTask = (task: TaskWithPhase) => (
    <TaskRow
      key={task.id}
      task={task}
      phases={phases}
      dependencyNames={(task.dependsOn ?? []).map((id) => dependencyTitle.get(id)).filter(Boolean) as string[]}
      active={lastCompletedTaskId === task.id || lastUnlockedTaskId === task.id}
      dragEnabled={reorderEnabled}
      selectionMode={selectionMode}
      selected={selectedTaskIds.has(task.id)}
      onSelect={() => onSelectTask(task.id)}
      onComplete={() => onComplete(task.phaseId, task.id)}
      onStatusChange={(status) => onStatusChange(task.phaseId, task.id, status)}
      onEditText={() => onEditTask(task.phaseId, task, "text")}
      onEditFull={() => onEditTask(task.phaseId, task)}
      onEditDate={(deadline) => onEditDate(task.phaseId, task.id, deadline)}
      onDelete={() => onDeleteTask(task.phaseId, task.id)}
      onDragEnd={persistOrder}
    />
  );

  if (!reorderEnabled || !phaseId) {
    return <div className="space-y-2">{group.tasks.map(renderTask)}</div>;
  }

  return (
    <Reorder.Group axis="y" values={orderedTaskIds} onReorder={setTransientOrder} className="space-y-1.5">
      {orderedTaskIds.map((taskId) => taskById.get(taskId)).filter((task): task is TaskWithPhase => Boolean(task)).map(renderTask)}
    </Reorder.Group>
  );
}

function InventoryItemRow({
  item,
  selectionMode,
  selected,
  onSelect,
  onRename,
  onToggleStatus,
  onEdit,
  onDelete,
}: {
  item: InventoryItem;
  selectionMode?: boolean;
  selected?: boolean;
  onSelect: () => void;
  onRename: (name: string) => void;
  onToggleStatus: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [isRenaming, setRenaming] = useState(false);
  const [draftName, setDraftName] = useState(item.name);
  const inputRef = useRef<HTMLInputElement>(null);
  const checked = item.status === "already_have" || item.status === "bought";

  useEffect(() => {
    setDraftName(item.name);
  }, [item.name]);

  useEffect(() => {
    if (selectionMode) setRenaming(false);
  }, [selectionMode]);

  useEffect(() => {
    if (isRenaming) inputRef.current?.focus();
  }, [isRenaming]);

  const saveRename = () => {
    const nextName = draftName.trim();
    if (!nextName) {
      setDraftName(item.name);
      setRenaming(false);
      return;
    }
    if (nextName !== item.name) onRename(nextName);
    setRenaming(false);
  };

  const cancelRename = () => {
    setDraftName(item.name);
    setRenaming(false);
  };

  return (
    <div className={`flex min-h-10 items-center gap-2 px-2.5 py-1.5 transition ${selectionMode && selected ? "bg-accent/[0.055]" : "hover:bg-paper/55"}`}>
      {selectionMode && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect();
          }}
          className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${selected ? "border-accent bg-accent text-white" : "border-black/18 bg-white text-black/25 hover:border-accent/40"}`}
          aria-label={selected ? `Unselect ${item.name}` : `Select ${item.name}`}
        >
          {selected && <Check className="h-3.5 w-3.5" />}
        </button>
      )}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          if (!selectionMode) onToggleStatus();
        }}
        disabled={selectionMode}
        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${checked ? "border-accent/50 bg-accent/10 text-accent" : "border-black/12 bg-white text-black/25 hover:border-black/25"} ${selectionMode ? "cursor-not-allowed opacity-35" : ""}`}
        aria-label={checked ? `Mark ${item.name} as need to buy` : `Mark ${item.name} as already have`}
      >
        {checked && <Check className="h-3.5 w-3.5" />}
      </button>
      <div className="min-w-0 flex-1">
        {isRenaming && !selectionMode ? (
          <input
            ref={inputRef}
            value={draftName}
            onChange={(event) => setDraftName(event.target.value)}
            onBlur={saveRename}
            onKeyDown={(event) => {
              if (event.key === "Enter") saveRename();
              if (event.key === "Escape") cancelRename();
            }}
            className="h-8 w-full rounded-lg border border-accent/30 bg-white px-2 text-sm font-semibold outline-none"
            aria-label={`Rename ${item.name}`}
          />
        ) : (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              if (selectionMode) onSelect();
              else setRenaming(true);
            }}
            className={`block max-w-full truncate rounded-md px-1 py-0.5 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${selectionMode ? "cursor-pointer hover:bg-accent/5" : "hover:bg-paper/70"}`}
          >
            {item.name}
          </button>
        )}
      </div>
      <div className="flex min-w-0 shrink-0 flex-wrap justify-end gap-1">
        {item.quantity !== "1" && <InventoryBadge>{item.quantity}</InventoryBadge>}
        {item.buyLocation === "korea" && <InventoryBadge>KR</InventoryBadge>}
        {item.buyLocation === "germany" && <InventoryBadge>DE</InventoryBadge>}
        {item.status === "important" && <InventoryBadge>Important</InventoryBadge>}
        {item.status === "need_to_buy" && <InventoryBadge>Need</InventoryBadge>}
      </div>
      {!selectionMode && <div className="flex shrink-0 gap-0.5">
        <button onClick={onEdit} className="grid h-7 w-7 place-items-center rounded-full text-black/36 transition hover:bg-paper hover:text-accent" aria-label={`Edit ${item.name}`}>
          <Pencil className="h-3.5 w-3.5" />
        </button>
        <button onClick={onDelete} className="grid h-7 w-7 place-items-center rounded-full text-black/36 transition hover:bg-red-50 hover:text-red-500" aria-label={`Delete ${item.name}`}>
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>}
    </div>
  );
}

function InventoryBadge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-paper/80 px-1.5 py-0.5 text-[11px] font-semibold leading-4 text-black/42">{children}</span>;
}

const UNASSIGNED_CONTAINER_ID = "__unassigned";

function PackingView({ categories, items, containers, onAssign, onDeleteItem, onReorderUnassigned }: { categories: InventoryCategory[]; items: InventoryItem[]; containers: PackingContainer[]; onAssign: (itemId: string, containerId?: string) => void; onDeleteItem: (itemId: string) => void; onReorderUnassigned: (orderedItemIds: string[]) => void }) {
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [activeDropId, setActiveDropId] = useState<string | null>(null);
  const [moveItem, setMoveItem] = useState<InventoryItem | null>(null);
  const [detailContainerId, setDetailContainerId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const categoryName = new globalThis.Map(categories.map((category) => [category.id, category.name]));
  const containerCards = containers.map((container) => ({ ...container, description: getPackingDescription(container.name), items: items.filter((item) => item.containerId === container.id), icon: getPackingIcon(container.name) }));
  const unassignedItems = [...items.filter((item) => !item.containerId)].sort((a, b) => (a.packingOrder ?? 0) - (b.packingOrder ?? 0));
  const filteredUnassigned = unassignedItems.filter((item) => {
    const needle = query.trim().toLowerCase();
    if (!needle) return true;
    return `${item.name} ${categoryName.get(item.categoryId) ?? ""} ${item.topic ?? ""}`.toLowerCase().includes(needle);
  });
  const moveSections = [
    { id: UNASSIGNED_CONTAINER_ID, name: "Unassigned", description: "Not packed yet", items: unassignedItems, icon: <Package /> },
    ...containerCards,
  ];
  const detailContainer = detailContainerId ? containerCards.find((container) => container.id === detailContainerId) : undefined;
  const selectedContainerLabel = moveItem ? moveSections.find((section) => section.id === (moveItem.containerId ?? UNASSIGNED_CONTAINER_ID))?.name : undefined;

  const moveToContainer = (itemId: string, containerId: string) => {
    onAssign(itemId, containerId === UNASSIGNED_CONTAINER_ID ? undefined : containerId);
  };

  const handleDrop = (containerId: string) => {
    if (!draggedItemId) return;
    const draggedItem = items.find((item) => item.id === draggedItemId);
    if (containerId === UNASSIGNED_CONTAINER_ID && !draggedItem?.containerId) {
      setDraggedItemId(null);
      setActiveDropId(null);
      return;
    }
    moveToContainer(draggedItemId, containerId);
    setDraggedItemId(null);
    setActiveDropId(null);
  };
  const deleteInventoryItemFromPacking = (itemId: string) => {
    if (!window.confirm("Delete this item from inventory? It will also be removed from Categories and Packing.")) return;
    onDeleteItem(itemId);
    setMoveItem((item) => (item?.id === itemId ? null : item));
  };

  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] sm:p-6">
      <div className="mb-6">
        <p className="text-sm font-semibold text-black/42">Inventory</p>
        <h2 className="mt-1 text-3xl font-semibold">Packing</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">Move belongings into temporary travel containers. Categories remain the long-term organization after arrival.</p>
      </div>

      <div className="mb-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">Containers</h3>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-black/42">{items.length - unassignedItems.length} packed</span>
        </div>
        <div className="flex snap-x gap-3 overflow-x-auto pb-2 no-scrollbar xl:grid xl:grid-cols-5 xl:overflow-visible xl:pb-0">
          {containerCards.map((container) => (
            <PackingContainerCard
              key={container.id}
              container={container}
              active={activeDropId === container.id}
              onOpen={() => setDetailContainerId(container.id)}
              onDragOver={(event) => {
                event.preventDefault();
                setActiveDropId(container.id);
              }}
              onDragLeave={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveDropId(null);
              }}
              onDrop={(event) => {
                event.preventDefault();
                handleDrop(container.id);
              }}
            />
          ))}
        </div>
      </div>

      <section
        onDragOver={(event) => {
          event.preventDefault();
          setActiveDropId(UNASSIGNED_CONTAINER_ID);
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActiveDropId(null);
        }}
        onDrop={(event) => {
          event.preventDefault();
          handleDrop(UNASSIGNED_CONTAINER_ID);
        }}
        className={`rounded-2xl border p-3 transition ${activeDropId === UNASSIGNED_CONTAINER_ID ? "border-accent/35 bg-accent/[0.04]" : "border-black/6 bg-paper/42"}`}
      >
        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Unassigned</h3>
            <p className="mt-0.5 text-sm text-black/42">{unassignedItems.length} items not packed yet</p>
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search unassigned..."
            className="h-10 w-full rounded-full border border-black/8 bg-white/70 px-4 text-sm outline-none transition focus:border-accent sm:w-64"
          />
        </div>
        <PackingUnassignedQueue
          items={filteredUnassigned}
          categoryName={categoryName}
          draggedItemId={draggedItemId}
          reorderEnabled={!query.trim()}
          onReorder={onReorderUnassigned}
          onMove={setMoveItem}
          onDelete={(itemId) => deleteInventoryItemFromPacking(itemId)}
          onDragStart={(event, itemId) => {
            setDraggedItemId(itemId);
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", itemId);
          }}
          onDragEnd={() => {
            setDraggedItemId(null);
            setActiveDropId(null);
          }}
          empty={query.trim() ? "No unassigned items match that search." : "Everything has a temporary home."}
        />
      </section>
      <AnimatePresence>
        {detailContainer && (
          <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/16 p-3 backdrop-blur-sm lg:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16, ease: "easeOut" }} className="flex max-h-[88vh] w-full max-w-2xl flex-col rounded-[1.45rem] border border-black/10 bg-paper p-4 shadow-soft">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <span className="[&_svg]:h-5 [&_svg]:w-5">{detailContainer.icon}</span>
                  </span>
                  <span className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">Container detail</p>
                    <h3 className="mt-1 truncate text-2xl font-semibold">{detailContainer.name}</h3>
                    <p className="mt-1 text-sm text-black/45">{detailContainer.items.length} items · {detailContainer.description}</p>
                  </span>
                </div>
                <button type="button" onClick={() => setDetailContainerId(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close container detail">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div
                onDragOver={(event) => {
                  event.preventDefault();
                  setActiveDropId(detailContainer.id);
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  handleDrop(detailContainer.id);
                }}
                className="min-h-28 flex-1 space-y-1.5 overflow-y-auto rounded-2xl bg-white/50 p-2"
              >
                {detailContainer.items.map((item) => (
                  <PackingDetailRow
                    key={item.id}
                    item={item}
                    categoryName={categoryName.get(item.categoryId) ?? "Uncategorized"}
                    containers={containers}
                    onMove={moveToContainer}
                    onDelete={() => deleteInventoryItemFromPacking(item.id)}
                    onDragStart={(event) => {
                      setDraggedItemId(item.id);
                      event.dataTransfer.effectAllowed = "move";
                      event.dataTransfer.setData("text/plain", item.id);
                    }}
                    onDragEnd={() => {
                      setDraggedItemId(null);
                      setActiveDropId(null);
                    }}
                  />
                ))}
                {!detailContainer.items.length && <p className="rounded-xl border border-dashed border-black/10 p-5 text-center text-sm text-black/42">Drop items into this container.</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
        {moveItem && (
          <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/16 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16, ease: "easeOut" }} className="w-full max-w-sm rounded-[1.4rem] border border-black/10 bg-paper p-4 shadow-soft">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">Move item</p>
                  <h3 className="mt-1 truncate text-xl font-semibold">{moveItem.name}</h3>
                  <p className="mt-1 text-sm text-black/45">Currently in {selectedContainerLabel ?? "Unassigned"}</p>
                </div>
                <button type="button" onClick={() => setMoveItem(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close move menu">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-1.5">
                {moveSections.map((section) => {
                  const active = (moveItem.containerId ?? UNASSIGNED_CONTAINER_ID) === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => {
                        moveToContainer(moveItem.id, section.id);
                        setMoveItem(null);
                      }}
                      className={`flex h-11 items-center justify-between rounded-xl px-3 text-left text-sm font-semibold transition ${active ? "bg-accent/10 text-accent" : "bg-white/65 text-black/58 hover:bg-white hover:text-ink"}`}
                    >
                      {section.name}
                      {active && <Check className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
              <button type="button" onClick={() => deleteInventoryItemFromPacking(moveItem.id)} className="mt-3 h-10 rounded-full border border-red-200 bg-white/70 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Delete item
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function getPackingDescription(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("26")) return "Checked luggage";
  if (normalized.includes("20")) return "Cabin suitcase";
  if (normalized.includes("backpack")) return "Daily carry";
  if (normalized.includes("hip")) return "Essentials";
  if (normalized.includes("shipment")) return "Send later";
  return "Temporary container";
}

function getPackingIcon(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("backpack")) return <Backpack />;
  if (normalized.includes("hip")) return <ShoppingBag />;
  if (normalized.includes("shipment")) return <Package />;
  return <Luggage />;
}

function PackingContainerCard({
  container,
  active,
  onOpen,
  onDragOver,
  onDragLeave,
  onDrop,
}: {
  container: PackingContainer & { description: string; items: InventoryItem[]; icon: React.ReactNode };
  active: boolean;
  onOpen: () => void;
  onDragOver: (event: React.DragEvent<HTMLButtonElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLButtonElement>) => void;
  onDrop: (event: React.DragEvent<HTMLButtonElement>) => void;
}) {
  const fill = Math.min(100, Math.round((container.items.length / 12) * 100));
  return (
    <button
      type="button"
      onClick={onOpen}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`flex min-h-40 min-w-[15rem] snap-start flex-col justify-between rounded-2xl border p-4 text-left transition xl:min-w-0 ${active ? "border-accent/35 bg-accent/[0.055] shadow-[0_14px_34px_rgba(15,143,104,0.08)]" : "border-black/6 bg-paper/50 hover:border-accent/18 hover:bg-paper/65"}`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
          <span className="[&_svg]:h-6 [&_svg]:w-6">{container.icon}</span>
        </span>
        <span className="rounded-full bg-white/75 px-2.5 py-1 text-xs font-semibold text-black/45">{container.items.length} items</span>
      </span>
      <span className="mt-5 block">
        <span className="block text-base font-semibold">{container.name}</span>
        <span className="mt-1 block text-sm font-medium text-black/42">{container.description}</span>
        <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-white/70">
          <span className="block h-full rounded-full bg-accent/55" style={{ width: `${fill}%` }} />
        </span>
      </span>
    </button>
  );
}

function PackingUnassignedQueue({
  items,
  categoryName,
  draggedItemId,
  reorderEnabled,
  onReorder,
  onMove,
  onDelete,
  onDragStart,
  onDragEnd,
  empty,
}: {
  items: InventoryItem[];
  categoryName: Map<string, string>;
  draggedItemId: string | null;
  reorderEnabled: boolean;
  onReorder: (orderedItemIds: string[]) => void;
  onMove: (item: InventoryItem) => void;
  onDelete: (itemId: string) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, itemId: string) => void;
  onDragEnd: () => void;
  empty: string;
}) {
  const sourceIds = useMemo(() => items.map((item) => item.id), [items]);
  const [orderedIds, setOrderedIds] = useState(sourceIds);
  const orderedIdsRef = useRef(sourceIds);
  const itemById = new globalThis.Map(items.map((item) => [item.id, item]));

  useEffect(() => {
    setOrderedIds(sourceIds);
    orderedIdsRef.current = sourceIds;
  }, [sourceIds]);

  const setTransientOrder = (ids: string[]) => {
    orderedIdsRef.current = ids;
    setOrderedIds(ids);
  };
  const persistOrder = () => onReorder(orderedIdsRef.current);

  if (!items.length) {
    return <div className="rounded-xl border border-dashed border-black/10 bg-white/45 p-5 text-center text-sm text-black/42">{empty}</div>;
  }

  if (!reorderEnabled) {
    return (
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <PackingItemCard
            key={item.id}
            item={item}
            categoryName={categoryName.get(item.categoryId) ?? "Uncategorized"}
            dragging={draggedItemId === item.id}
            onMove={() => onMove(item)}
            onDelete={() => onDelete(item.id)}
            onDragStart={(event) => onDragStart(event, item.id)}
            onDragEnd={onDragEnd}
          />
        ))}
      </div>
    );
  }

  const reorderForTarget = (targetId: string) => {
    if (!draggedItemId || draggedItemId === targetId) return;
    const currentIds = orderedIdsRef.current;
    const fromIndex = currentIds.indexOf(draggedItemId);
    const toIndex = currentIds.indexOf(targetId);
    if (fromIndex === -1 || toIndex === -1) return;
    const nextIds = [...currentIds];
    const [movedId] = nextIds.splice(fromIndex, 1);
    nextIds.splice(toIndex, 0, movedId);
    setTransientOrder(nextIds);
  };

  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {orderedIds.map((itemId) => itemById.get(itemId)).filter((item): item is InventoryItem => Boolean(item)).map((item) => (
        <motion.div
          key={item.id}
          layout="position"
          initial={false}
          transition={{ layout: { duration: 0.36, ease: [0.25, 0.1, 0.25, 1] } }}
          className="min-w-0"
          onDragOver={(event) => {
            event.preventDefault();
            reorderForTarget(item.id);
          }}
          onDrop={persistOrder}
        >
          <PackingItemCard
            item={item}
            categoryName={categoryName.get(item.categoryId) ?? "Uncategorized"}
            dragging={draggedItemId === item.id}
            onMove={() => onMove(item)}
            onDelete={() => onDelete(item.id)}
            onDragStart={(event) => onDragStart(event, item.id)}
            onDragEnd={() => {
              persistOrder();
              onDragEnd();
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function PackingItemCard({ item, categoryName, dragging, onMove, onDelete, onDragStart, onDragEnd }: { item: InventoryItem; categoryName: string; dragging: boolean; onMove: () => void; onDelete: () => void; onDragStart: (event: React.DragEvent<HTMLDivElement>) => void; onDragEnd: () => void }) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`group min-h-[5.75rem] cursor-grab rounded-xl border border-black/7 bg-white/78 px-3 py-2.5 shadow-[0_5px_14px_rgba(23,23,23,0.025)] transition duration-200 active:cursor-grabbing ${dragging ? "opacity-85 shadow-[0_10px_22px_rgba(23,23,23,0.055)]" : "hover:border-accent/18 hover:bg-white"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 pr-1">
          <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
          <p className="mt-0.5 truncate text-xs font-medium text-black/40">{categoryName}{item.quantity !== "1" ? ` · Qty ${item.quantity}` : ""}</p>
        </div>
        <div className="flex shrink-0 gap-1 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
          <button type="button" onClick={onMove} className="rounded-full bg-paper/80 px-2 py-1 text-xs font-semibold text-black/38 transition hover:text-accent">
            Move
          </button>
          <button type="button" onClick={onDelete} className="rounded-full bg-paper/80 px-2 py-1 text-xs font-semibold text-black/38 transition hover:bg-red-50 hover:text-red-500">
            Delete
          </button>
        </div>
      </div>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {item.buyLocation === "korea" && <InventoryBadge>KR</InventoryBadge>}
        {item.buyLocation === "germany" && <InventoryBadge>DE</InventoryBadge>}
        {item.status === "important" && <InventoryBadge>Important</InventoryBadge>}
        {item.topic && <InventoryBadge>{item.topic}</InventoryBadge>}
      </div>
    </div>
  );
}

function PackingDetailRow({
  item,
  categoryName,
  containers,
  onMove,
  onDelete,
  onDragStart,
  onDragEnd,
}: {
  item: InventoryItem;
  categoryName: string;
  containers: PackingContainer[];
  onMove: (itemId: string, containerId: string) => void;
  onDelete: () => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: () => void;
}) {
  return (
    <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd} className="flex items-center gap-2 rounded-xl bg-white/75 px-3 py-2">
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold">{item.name}</span>
        <span className="mt-0.5 block truncate text-xs font-medium text-black/40">{categoryName}{item.quantity !== "1" ? ` · Qty ${item.quantity}` : ""}</span>
      </span>
      <button type="button" onClick={() => onMove(item.id, UNASSIGNED_CONTAINER_ID)} className="shrink-0 rounded-full border border-black/8 bg-paper px-2.5 py-1 text-xs font-semibold text-black/45 transition hover:border-accent/25 hover:text-accent">
        Remove from container
      </button>
      <button type="button" onClick={onDelete} className="shrink-0 rounded-full border border-red-200 bg-white/70 px-2.5 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50">
        Delete item
      </button>
      <select value={item.containerId ?? ""} onChange={(event) => onMove(item.id, event.target.value || UNASSIGNED_CONTAINER_ID)} className="hidden h-8 max-w-36 shrink-0 rounded-full border border-black/8 bg-paper px-2 text-xs font-semibold text-black/50 outline-none transition focus:border-accent sm:block">
        <option value="">Unassigned</option>
        {containers.map((container) => (
          <option key={container.id} value={container.id}>{container.name}</option>
        ))}
      </select>
    </div>
  );
}

function InventoryItemModal({ categories, defaultCategoryId, item, onClose, onSubmit }: { categories: InventoryCategory[]; defaultCategoryId: string; item?: InventoryItem; onClose: () => void; onSubmit: (item: Omit<InventoryItem, "id"> & { id?: string }) => void }) {
  const [showMore, setShowMore] = useState(Boolean(item));
  const [form, setForm] = useState<Omit<InventoryItem, "id">>({
    name: item?.name ?? "",
    categoryId: item?.categoryId ?? defaultCategoryId,
    topic: item?.topic ?? "",
    quantity: item?.quantity ?? "1",
    status: item?.status ?? "already_have",
    buyLocation: item?.buyLocation ?? "none",
    priority: item?.priority ?? "medium",
    notes: item?.notes ?? "",
    containerId: item?.containerId,
    packed: item?.packed ?? false,
  });

  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ ...form, id: item?.id, topic: form.topic?.trim() || undefined, notes: form.notes?.trim() || undefined });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-full max-w-md rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/38">Inventory</p>
            <h2 className="mt-1 text-2xl font-semibold">{item ? "Edit item" : "Add item"}</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close inventory editor">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-3">
          <input value={form.name} onChange={(event) => setForm((draft) => ({ ...draft, name: event.target.value }))} placeholder="Item name" className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" autoFocus />
          <select value={form.categoryId} onChange={(event) => setForm((draft) => ({ ...draft, categoryId: event.target.value }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent">
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
          <button type="button" onClick={() => setShowMore((value) => !value)} className="justify-self-start text-sm font-semibold text-black/45 transition hover:text-accent">
            {showMore ? "Hide options" : "More options"}
          </button>
          {showMore && (
            <div className="grid gap-3">
              <input value={form.topic ?? ""} onChange={(event) => setForm((draft) => ({ ...draft, topic: event.target.value }))} placeholder="Topic, optional" className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
              <input value={form.quantity} onChange={(event) => setForm((draft) => ({ ...draft, quantity: event.target.value }))} placeholder="Quantity" className="h-11 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
              <div className="grid gap-3 sm:grid-cols-3">
                <select value={form.status} onChange={(event) => setForm((draft) => ({ ...draft, status: event.target.value as InventoryStatus }))} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
                  {Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
                <select value={form.buyLocation} onChange={(event) => setForm((draft) => ({ ...draft, buyLocation: event.target.value as BuyLocation }))} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
                  {Object.entries(buyLocationLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
                <select value={form.priority} onChange={(event) => setForm((draft) => ({ ...draft, priority: event.target.value as InventoryPriority }))} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <textarea value={form.notes ?? ""} onChange={(event) => setForm((draft) => ({ ...draft, notes: event.target.value }))} placeholder="Optional notes" rows={3} className="resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent" />
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">Cancel</button>
          <button disabled={!form.name.trim()} className="h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:bg-black/20">{item ? "Save item" : "Add item"}</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function parseBulkInventoryLines(value: string) {
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function BulkInventoryModal({
  categories,
  defaultCategoryId,
  defaultTopic,
  fixedCategory,
  onClose,
  onSubmit,
}: {
  categories: InventoryCategory[];
  defaultCategoryId?: string;
  defaultTopic?: string;
  fixedCategory?: boolean;
  onClose: () => void;
  onSubmit: (items: Array<Omit<InventoryItem, "id">>) => void;
}) {
  const [categoryId, setCategoryId] = useState(defaultCategoryId ?? categories[0]?.id ?? "");
  const [topic, setTopic] = useState(defaultTopic ?? "");
  const [status, setStatus] = useState<InventoryStatus>("already_have");
  const [buyLocation, setBuyLocation] = useState<BuyLocation>("none");
  const [text, setText] = useState("");
  const names = useMemo(() => parseBulkInventoryLines(text), [text]);

  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.form
        onSubmit={(event) => {
          event.preventDefault();
          if (!categoryId || !names.length) return;
          onSubmit(names.map((name) => ({ name, categoryId, topic: topic.trim() || undefined, quantity: "1", status, buyLocation, priority: "medium", packed: false })));
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-full max-w-lg rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/38">Inventory</p>
            <h2 className="mt-1 text-2xl font-semibold">Bulk add items</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close bulk item editor">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-3">
          <select value={categoryId} disabled={fixedCategory} onChange={(event) => setCategoryId(event.target.value)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent disabled:text-black/42">
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
          <input value={topic} onChange={(event) => setTopic(event.target.value)} placeholder="Topic, optional: Cooking, Winter, Water..." className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent" />
          <textarea value={text} onChange={(event) => setText(event.target.value)} rows={9} placeholder={"One item per line\npassport pouch\nwinter socks\n한국 비상약"} className="resize-none rounded-xl border border-black/10 bg-white p-3 text-sm outline-none transition focus:border-accent" />
          <div className="grid gap-3 sm:grid-cols-2">
            <select value={status} onChange={(event) => setStatus(event.target.value as InventoryStatus)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
              {Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            <select value={buyLocation} onChange={(event) => setBuyLocation(event.target.value as BuyLocation)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
              {Object.entries(buyLocationLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
          <p className="rounded-xl bg-white/65 p-3 text-sm text-black/45">{names.length ? `${names.length} items ready to add.` : "Empty lines are ignored. Commas stay inside item names."}</p>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">Cancel</button>
          <button disabled={!categoryId || !names.length} className="h-11 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:bg-black/20">Add {names.length || ""} items</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

function TaskRow({
  task,
  phases,
  dependencyNames,
  active,
  onComplete,
  onStatusChange,
  onEditText,
  onEditFull,
  onEditDate,
  onDelete,
  dragEnabled,
  selectionMode,
  selected,
  onSelect,
  onDragEnd,
}: {
  task: TaskWithPhase;
  phases: Phase[];
  dependencyNames: string[];
  active?: boolean;
  onComplete: () => void;
  onStatusChange: (status: TaskStatus) => void;
  onEditText: () => void;
  onEditFull: () => void;
  onEditDate: (deadline: string) => void;
  onDelete: () => void;
  dragEnabled?: boolean;
  selectionMode?: boolean;
  selected?: boolean;
  onSelect: () => void;
  onDragEnd?: () => void;
}) {
  const [isDateOpen, setDateOpen] = useState(false);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [dependencyMessage, setDependencyMessage] = useState<string>();
  const [draftDate, setDraftDate] = useState(task.deadline);
  const blocked = !isTaskUnlocked(task, phases);
  const completed = task.status === "completed";
  const overdue = isOverdue(task.deadline, completed);

  useEffect(() => {
    setDraftDate(task.deadline);
  }, [task.deadline]);

  useEffect(() => {
    if (!selectionMode) return;
    setDateOpen(false);
    setStatusOpen(false);
  }, [selectionMode]);

  const saveDate = () => {
    onEditDate(draftDate);
    setDateOpen(false);
  };
  const showDependencyMessage = () => {
    const names = dependencyNames.length ? dependencyNames.join(", ") : "the required task";
    setDependencyMessage(dependencyNames.length > 1 ? `Complete required tasks first: ${names}` : `Complete the required task first: ${names}`);
  };
  const handleComplete = () => {
    if (selectionMode) return;
    if (blocked && !completed) {
      showDependencyMessage();
      return;
    }
    onComplete();
  };
  const handleStatusChange = (status: TaskStatus) => {
    if (status === "completed" && blocked && !completed) {
      showDependencyMessage();
      return;
    }
    onStatusChange(status);
  };

  useEffect(() => {
    if (!dependencyMessage) return;
    const timeout = window.setTimeout(() => setDependencyMessage(undefined), 3200);
    return () => window.clearTimeout(timeout);
  }, [dependencyMessage]);

  const RowShell = dragEnabled ? Reorder.Item : motion.div;

  return (
    <RowShell
      value={task.id}
      layout={dragEnabled ? "position" : undefined}
      initial={false}
      animate={{ opacity: isDragging ? 0.96 : 1, backgroundColor: active ? "rgba(15,143,104,0.08)" : "rgba(255,255,255,1)" }}
      exit={{ opacity: 0 }}
      whileDrag={{ scale: 1.006, boxShadow: "0 16px 34px rgba(23,23,23,0.095)" }}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => {
        setDragging(false);
        onDragEnd?.();
      }}
      transition={{
        opacity: { duration: 0.12, ease: "easeOut" },
        backgroundColor: { duration: 0.14, ease: "easeOut" },
        layout: { type: "spring", stiffness: 420, damping: 38, mass: 0.7 },
      }}
      className={`rounded-xl border border-black/8 px-3 py-2 shadow-[0_5px_16px_rgba(23,23,23,0.026)] transition-colors hover:border-black/14 ${isDragging ? "relative z-20 cursor-grabbing border-accent/22" : ""}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
      {selectionMode && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect();
          }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${selected ? "border-accent bg-accent text-white" : "border-black/18 bg-white text-black/25 hover:border-accent/40"}`}
          aria-label={selected ? `Unselect ${task.title}` : `Select ${task.title}`}
        >
          {selected ? <Check className="h-4 w-4" /> : null}
        </button>
      )}
      {dragEnabled && !selectionMode && (
        <span className="grid h-8 w-5 shrink-0 cursor-grab place-items-center text-black/24 transition hover:text-accent/65 active:cursor-grabbing" aria-label="Drag to reorder">
          <GripVertical className="h-4 w-4" />
        </span>
      )}
      <button
        type="button"
        onClick={(event) => { event.stopPropagation(); handleComplete(); }}
        disabled={selectionMode}
        className={`grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-lg border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${completed ? "border-accent bg-accent text-white" : blocked ? "border-black/12 bg-white text-black/25 hover:border-black/20 hover:text-black/40" : "border-black/15 text-black/35 hover:border-accent hover:text-accent"} ${selectionMode ? "cursor-not-allowed opacity-35" : ""}`}
        aria-label={completed ? `Reopen ${task.title}` : `Complete ${task.title}`}
      >
          {completed ? <Check className="h-4 w-4" /> : null}
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          if (selectionMode) onSelect();
          else onEditText();
        }}
        className={`group -m-1.5 flex min-w-0 flex-1 cursor-pointer items-center rounded-xl p-1.5 text-left transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${selectionMode ? "hover:bg-accent/5" : "hover:bg-black/[0.025]"}`}
        aria-label={selectionMode ? (selected ? `Unselect ${task.title}` : `Select ${task.title}`) : `Edit ${task.title}`}
      >
        <span className="min-w-0 flex-1">
          <span className="flex min-w-0 items-center gap-2">
            <span className={`min-w-0 truncate text-[15px] font-semibold ${completed ? "text-black/45 line-through decoration-accent/60" : "text-ink"}`}>{task.title}</span>
            {task.status === "in_progress" && !completed && <Badge>In progress</Badge>}
            {blocked && !completed && dependencyNames.length > 0 && <Badge>Waiting</Badge>}
            {overdue && <Badge tone="warn">Overdue</Badge>}
          </span>
          <span className="mt-0.5 flex min-w-0 items-center gap-2 overflow-hidden text-xs leading-5 text-black/42">
            {blocked && dependencyNames.length > 0 && <span className="hidden min-w-0 truncate sm:inline">Waiting for: {dependencyNames.join(", ")}</span>}
            {task.note && <span className="min-w-0 truncate">{task.note}</span>}
          </span>
        </span>
      </button>

      {!selectionMode && <DateEditZone
        deadline={task.deadline}
        draftDate={draftDate}
        overdue={overdue}
        isOpen={isDateOpen}
        onOpen={() => {
          setStatusOpen(false);
          setDateOpen(true);
        }}
        onClose={() => {
          setDraftDate(task.deadline);
          setDateOpen(false);
        }}
        onChange={setDraftDate}
        onSave={saveDate}
        className="hidden sm:inline-flex"
      />}

      {!selectionMode && <div className="flex shrink-0 items-center justify-end gap-1">
        <StatusEditZone
          status={task.status}
          isOpen={isStatusOpen}
          onOpen={() => {
            setDateOpen(false);
            setStatusOpen(true);
          }}
          onClose={() => setStatusOpen(false)}
          onChange={handleStatusChange}
        />
        <button onClick={(event) => { event.stopPropagation(); onEditFull(); }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-paper hover:text-accent" aria-label="Edit task">
          <Pencil className="h-4 w-4" />
        </button>
        <button onClick={(event) => { event.stopPropagation(); onDelete(); }} className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-red-50 hover:text-red-500" aria-label="Delete task">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>}
      </div>

      {!selectionMode && <DateEditZone
        deadline={task.deadline}
        draftDate={draftDate}
        overdue={overdue}
        isOpen={isDateOpen}
        onOpen={() => {
          setStatusOpen(false);
          setDateOpen(true);
        }}
        onClose={() => {
          setDraftDate(task.deadline);
          setDateOpen(false);
        }}
        onChange={setDraftDate}
        onSave={saveDate}
        className="mt-2 inline-flex sm:hidden"
      />}
      <AnimatePresence>
        {dependencyMessage && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.14 }} className="mt-3 rounded-xl bg-paper px-3 py-2 text-sm font-medium text-black/52">
            {dependencyMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </RowShell>
  );
}

const statusOptions: Array<{ value: TaskStatus; label: string }> = [
  { value: "available", label: "Available" },
  { value: "in_progress", label: "In progress" },
  { value: "completed", label: "Completed" },
];

function StatusEditZone({
  status,
  isOpen,
  onOpen,
  onClose,
  onChange,
}: {
  status: TaskStatus;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (status: TaskStatus) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const activeLabel = statusOptions.find((option) => option.value === status)?.label ?? "Available";

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) onClose();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          if (isOpen) onClose();
          else onOpen();
        }}
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/42 transition hover:bg-paper hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/10 ${isOpen ? "bg-accent/10 text-accent" : ""}`}
        aria-label={`Change status. Current status ${activeLabel}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Clock3 className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-44 rounded-2xl border border-black/10 bg-white p-2 shadow-soft">
          <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Status</p>
          <div role="menu" className="space-y-1">
            {statusOptions.map((option) => {
              const active = option.value === status;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={(event) => {
                    event.stopPropagation();
                    onChange(option.value);
                    onClose();
                  }}
                  className={`flex h-10 w-full items-center justify-between rounded-xl px-3 text-left text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${active ? "bg-accent/10 text-accent" : "text-black/58 hover:bg-paper hover:text-ink"}`}
                >
                  {option.label}
                  {active && <Check className="h-4 w-4" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function DateEditZone({
  deadline,
  draftDate,
  overdue,
  isOpen,
  onOpen,
  onClose,
  onChange,
  onSave,
  className = "",
}: {
  deadline: string;
  draftDate: string;
  overdue: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onChange: (value: string) => void;
  onSave: () => void;
  className?: string;
}) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onOpen();
        }}
        className={`inline-flex h-8 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition hover:ring-4 hover:ring-accent/10 focus:outline-none focus:ring-4 focus:ring-accent/10 ${overdue ? "bg-red-50 text-red-600" : "bg-paper text-black/45 hover:text-accent"}`}
        aria-label={`Edit due date ${formatShortDate(deadline)}`}
      >
        <CalendarDays className="h-3.5 w-3.5" />
        {formatShortDate(deadline)}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-64 rounded-2xl border border-black/10 bg-white p-3 shadow-soft">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Due date</p>
          <input
            type="date"
            value={draftDate}
            onChange={(event) => onChange(event.target.value)}
            className="h-10 w-full rounded-xl border border-black/10 bg-paper px-3 text-sm outline-none transition focus:border-accent"
          />
          <div className="mt-3 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="h-9 rounded-full border border-black/10 px-3 text-sm font-semibold text-black/55">
              Cancel
            </button>
            <button type="button" onClick={onSave} className="h-9 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-accent">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function RightRail(props: { overallProgress: number; completedTasks: number; totalTasks: number; nextTasks: TaskWithPhase[]; recentCompleted: TaskWithPhase[]; onOpenSettings: () => void }) {
  return (
    <aside className="order-3 space-y-3 text-black/50 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] lg:overflow-y-auto lg:pr-1">
      <RailList title="Next steps" icon={<Circle />} items={props.nextTasks.map((task) => ({ title: task.title, meta: task.phaseTitle }))} />
      <details className="rounded-[1.35rem] bg-white/38 p-4 text-sm text-black/42 backdrop-blur-xl">
        <summary className="cursor-pointer list-none font-semibold text-black/48">Journey progress</summary>
        <div className="mt-4">
          <ProgressBar value={props.overallProgress} />
        </div>
        <p className="mt-3 leading-6">{props.completedTasks} of {props.totalTasks} checkpoints cleared.</p>
      </details>
      {props.recentCompleted.length > 0 && (
        <details className="rounded-[1.35rem] bg-white/38 p-4 text-sm text-black/42 backdrop-blur-xl">
          <summary className="cursor-pointer list-none font-semibold text-black/48">Recently completed</summary>
          <div className="mt-3">
            <RailListBare icon={<CheckCircle2 />} items={props.recentCompleted.map((task) => ({ title: task.title, meta: formatShortDate(task.deadline), done: true }))} />
          </div>
        </details>
      )}
      <button onClick={props.onOpenSettings} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-white/35 px-4 text-sm font-semibold text-black/42 transition hover:border-accent/25 hover:text-accent">
        <Settings className="h-4 w-4" />
        Backup and settings
      </button>
    </aside>
  );
}

function RailList({ title, icon, items }: { title: string; icon: React.ReactNode; items: Array<{ title: string; meta: string; done?: boolean }> }) {
  return (
    <section className="rounded-[1.35rem] border border-black/6 bg-white/62 p-5 shadow-[0_10px_26px_rgba(23,23,23,0.025)] backdrop-blur-xl">
      <h3 className="text-sm font-semibold text-black/62">{title}</h3>
      <RailListBare icon={icon} items={items} />
    </section>
  );
}

function RailListBare({ icon, items }: { icon: React.ReactNode; items: Array<{ title: string; meta: string; done?: boolean }> }) {
  return (
    <div className="mt-3 space-y-2">
      {items.length ? items.map((item) => (
        <div key={`${item.title}-${item.meta}`} className="flex items-center gap-3 rounded-xl bg-white/52 px-3 py-2">
          <span className={`grid h-5 w-5 place-items-center rounded-full ${item.done ? "bg-accent/70 text-white" : "bg-black/5 text-black/35"}`}>
            <span className="[&_svg]:h-3 [&_svg]:w-3">{icon}</span>
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">{item.title}</span>
            <span className="text-xs text-black/42">{item.meta}</span>
          </span>
        </div>
      )) : <p className="rounded-xl bg-paper/70 p-3 text-sm text-black/45">Nothing here yet.</p>}
    </div>
  );
}

function UtilityDrawer({ phases, inventoryCategories, inventoryItems, packingContainers, error, lastSavedAt, onClose, onRestore, onReset }: { phases: Phase[]; inventoryCategories: InventoryCategory[]; inventoryItems: InventoryItem[]; packingContainers: PackingContainer[]; error?: string; lastSavedAt?: string; onClose: () => void; onRestore: (phases: Phase[], inventoryCategories: InventoryCategory[], inventoryItems: InventoryItem[], packingContainers: PackingContainer[]) => void; onReset: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16, ease: "easeOut" }} className="w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/38">Settings</p>
            <h2 className="mt-1 text-2xl font-semibold">Backup and restore</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close settings">
            <X className="h-4 w-4" />
          </button>
        </div>
        <DataSafetyPanel phases={phases} inventoryCategories={inventoryCategories} inventoryItems={inventoryItems} packingContainers={packingContainers} error={error} lastSavedAt={lastSavedAt} onRestore={onRestore} onReset={onReset} />
      </motion.div>
    </motion.div>
  );
}

function EmptyRecovery({ error, phases, inventoryCategories, inventoryItems, packingContainers, lastSavedAt, onRestore, onReset }: { error?: string; phases: Phase[]; inventoryCategories: InventoryCategory[]; inventoryItems: InventoryItem[]; packingContainers: PackingContainer[]; lastSavedAt?: string; onRestore: (phases: Phase[], inventoryCategories: InventoryCategory[], inventoryItems: InventoryItem[], packingContainers: PackingContainer[]) => void; onReset: () => void }) {
  return (
    <section className="rounded-[1.5rem] border border-red-200 bg-red-50 p-6 text-red-700 shadow-soft">
      <h2 className="text-2xl font-semibold">Relocation data could not be loaded</h2>
      <p className="mt-2 text-sm leading-6">Restore a valid JSON backup. Sample data will not overwrite the saved storage while it appears corrupted.</p>
      <div className="mt-5">
        <DataSafetyPanel phases={phases} inventoryCategories={inventoryCategories} inventoryItems={inventoryItems} packingContainers={packingContainers} error={error} lastSavedAt={lastSavedAt} onRestore={onRestore} onReset={onReset} />
      </div>
    </section>
  );
}

function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "warn" }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tone === "warn" ? "bg-red-50 text-red-600" : "bg-paper text-black/42"}`}>{children}</span>;
}


