"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Archive,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  ListChecks,
  Map,
  Pencil,
  Plane,
  Plus,
  Radar,
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
import type { Phase, RelocationTask, TaskStatus, ViewMode } from "@/lib/types";

type TaskEditor = { phaseId: string; task?: RelocationTask; mode?: "full" | "text" } | null;
type TaskWithPhase = RelocationTask & { phaseId: string; phaseTitle: string };

const navItems: Array<{ id: ViewMode; label: string; icon: React.ReactNode }> = [
  { id: "timeline", label: "Timeline", icon: <Map /> },
  { id: "focus", label: "Focus", icon: <Radar /> },
  { id: "tasks", label: "All Tasks", icon: <ListChecks /> },
  { id: "archive", label: "Archive", icon: <Archive /> },
];

export default function Home() {
  const {
    phases,
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
    deleteTask,
    setTaskStatus,
    completeTask,
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
            <EmptyRecovery error={persistenceError} phases={phases} lastSavedAt={lastSavedAt} onRestore={replaceData} onReset={resetToSampleData} />
          ) : (
            <AnimatePresence mode="sync">
              {(viewMode === "timeline" || viewMode === "focus") && selectedPhase && (
                <motion.div key="phase-workspace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.14, ease: "easeOut" }} className="space-y-5">
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
                    title={viewMode === "focus" ? "Focused tasks" : "Tasks"}
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
                    onComplete={completeTask}
                    onStatusChange={setTaskStatus}
                  />
                </motion.div>
              )}

              {viewMode === "tasks" && (
                <motion.div key="tasks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.14, ease: "easeOut" }}>
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
                    onComplete={completeTask}
                    onStatusChange={setTaskStatus}
                  />
                </motion.div>
              )}

              {viewMode === "archive" && (
                <motion.div key="archive" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.14, ease: "easeOut" }}>
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
          <UtilityDrawer phases={phases} error={persistenceError} lastSavedAt={lastSavedAt} onClose={() => setSettingsOpen(false)} onRestore={replaceData} onReset={resetToSampleData} />
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
  onComplete: (phaseId: string, taskId: string) => void;
  onStatusChange: (phaseId: string, taskId: string, status: TaskStatus) => void;
  empty?: string;
  hideAdd?: boolean;
}) {
  const taskGroups = useMemo(() => getTaskDateGroups(props.tasks), [props.tasks]);

  return (
    <section className="rounded-[1.5rem] border border-black/8 bg-white/94 p-5 shadow-[0_18px_54px_rgba(23,23,23,0.045)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{props.title}</h3>
        </div>
        {!props.hideAdd && (
          <div className="flex flex-wrap gap-2">
            <button onClick={props.onBulkAdd} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 text-sm font-semibold text-black/50 transition hover:border-accent/30 hover:text-accent">
              <ListChecks className="h-4 w-4" />
              Bulk add
            </button>
            <button onClick={props.onAddTask} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(15,143,104,0.12)] transition hover:bg-accent/90">
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
              <div className="space-y-3.5">
                <AnimatePresence>
                  {group.tasks.map((task) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      phases={props.phases}
                      dependencyNames={(task.dependsOn ?? []).map((id) => props.dependencyTitle.get(id)).filter(Boolean) as string[]}
                      active={props.lastCompletedTaskId === task.id || props.lastUnlockedTaskId === task.id}
                      onComplete={() => props.onComplete(task.phaseId, task.id)}
                      onStatusChange={(status) => props.onStatusChange(task.phaseId, task.id, status)}
                      onEditText={() => props.onEditTask(task.phaseId, task, "text")}
                      onEditFull={() => props.onEditTask(task.phaseId, task)}
                      onEditDate={(deadline) => props.onEditDate(task.phaseId, task.id, deadline)}
                      onDelete={() => props.onDeleteTask(task.phaseId, task.id)}
                    />
                  ))}
                </AnimatePresence>
              </div>
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
    return a.title.localeCompare(b.title);
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
}) {
  const [isDateOpen, setDateOpen] = useState(false);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [dependencyMessage, setDependencyMessage] = useState<string>();
  const [draftDate, setDraftDate] = useState(task.deadline);
  const blocked = !isTaskUnlocked(task, phases);
  const completed = task.status === "completed";
  const overdue = isOverdue(task.deadline, completed);

  useEffect(() => {
    setDraftDate(task.deadline);
  }, [task.deadline]);

  const saveDate = () => {
    onEditDate(draftDate);
    setDateOpen(false);
  };
  const showDependencyMessage = () => {
    const names = dependencyNames.length ? dependencyNames.join(", ") : "the required task";
    setDependencyMessage(dependencyNames.length > 1 ? `Complete required tasks first: ${names}` : `Complete the required task first: ${names}`);
  };
  const handleComplete = () => {
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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundColor: active ? "rgba(15,143,104,0.08)" : "rgba(255,255,255,1)" }} exit={{ opacity: 0 }} transition={{ duration: 0.14, ease: "easeOut" }} className="rounded-2xl border border-black/9 px-4 py-4 shadow-[0_8px_28px_rgba(23,23,23,0.035)] transition hover:border-black/16 hover:shadow-[0_12px_34px_rgba(23,23,23,0.055)]">
      <div className="flex items-center gap-3 sm:gap-4">
      <button
        type="button"
        onClick={(event) => { event.stopPropagation(); handleComplete(); }}
        className={`grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-lg border transition focus:outline-none focus:ring-4 focus:ring-accent/10 ${completed ? "border-accent bg-accent text-white" : blocked ? "border-black/12 bg-white text-black/25 hover:border-black/20 hover:text-black/40" : "border-black/15 text-black/35 hover:border-accent hover:text-accent"}`}
        aria-label={completed ? `Reopen ${task.title}` : `Complete ${task.title}`}
      >
          {completed ? <Check className="h-4 w-4" /> : null}
      </button>

      <button
        type="button"
        onClick={(event) => { event.stopPropagation(); onEditText(); }}
        className="group -m-2 flex min-w-0 flex-1 cursor-pointer items-center rounded-2xl p-2 text-left transition hover:bg-black/[0.025] focus:outline-none focus:ring-4 focus:ring-accent/10"
        aria-label={`Edit ${task.title}`}
      >
        <span className="min-w-0 flex-1">
          <span className="flex min-w-0 items-center gap-2">
            <span className={`min-w-0 truncate text-base font-semibold ${completed ? "text-black/45 line-through decoration-accent/60" : "text-ink"}`}>{task.title}</span>
            {task.status === "in_progress" && !completed && <Badge>In progress</Badge>}
            {blocked && !completed && dependencyNames.length > 0 && <Badge>Waiting</Badge>}
            {overdue && <Badge tone="warn">Overdue</Badge>}
          </span>
          <span className="mt-2 flex min-w-0 items-center gap-2 overflow-hidden text-xs leading-5 text-black/42">
            <span className="shrink-0">{task.phaseTitle}</span>
            {blocked && dependencyNames.length > 0 && <span className="hidden min-w-0 truncate sm:inline">Waiting for: {dependencyNames.join(", ")}</span>}
            {task.note && <span className="min-w-0 truncate">{task.note}</span>}
          </span>
        </span>
      </button>

      <DateEditZone
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
      />

      <div className="flex shrink-0 items-center justify-end gap-1">
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
      </div>
      </div>

      <DateEditZone
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
        className="mt-3 inline-flex sm:hidden"
      />
      <AnimatePresence>
        {dependencyMessage && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.14 }} className="mt-3 rounded-xl bg-paper px-3 py-2 text-sm font-medium text-black/52">
            {dependencyMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
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

function UtilityDrawer({ phases, error, lastSavedAt, onClose, onRestore, onReset }: { phases: Phase[]; error?: string; lastSavedAt?: string; onClose: () => void; onRestore: (phases: Phase[]) => void; onReset: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/18 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16, ease: "easeOut" }} className="w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/38">Settings</p>
            <h2 className="mt-1 text-2xl font-semibold">Backup and restore</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close settings">
            <X className="h-4 w-4" />
          </button>
        </div>
        <DataSafetyPanel phases={phases} error={error} lastSavedAt={lastSavedAt} onRestore={onRestore} onReset={onReset} />
      </motion.div>
    </motion.div>
  );
}

function EmptyRecovery({ error, phases, lastSavedAt, onRestore, onReset }: { error?: string; phases: Phase[]; lastSavedAt?: string; onRestore: (phases: Phase[]) => void; onReset: () => void }) {
  return (
    <section className="rounded-[1.5rem] border border-red-200 bg-red-50 p-6 text-red-700 shadow-soft">
      <h2 className="text-2xl font-semibold">Relocation data could not be loaded</h2>
      <p className="mt-2 text-sm leading-6">Restore a valid JSON backup. Sample data will not overwrite the saved storage while it appears corrupted.</p>
      <div className="mt-5">
        <DataSafetyPanel phases={phases} error={error} lastSavedAt={lastSavedAt} onRestore={onRestore} onReset={onReset} />
      </div>
    </section>
  );
}

function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "warn" }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tone === "warn" ? "bg-red-50 text-red-600" : "bg-paper text-black/42"}`}>{children}</span>;
}


