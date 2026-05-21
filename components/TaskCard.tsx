"use client";

import { motion } from "framer-motion";
import { CalendarDays, Check, Circle, Clock3, Lock, Pencil, Play, Trash2 } from "lucide-react";
import { formatShortDate, getDaysAway, isOverdue } from "@/lib/date";
import { getEffectiveTaskStatus } from "@/lib/store";
import type { Phase, RelocationTask } from "@/lib/types";

type Props = {
  task: RelocationTask;
  phase: Phase;
  phases: Phase[];
  dependencyTitle?: string;
  active?: boolean;
  onComplete: () => void;
  onStart: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function TaskCard({ task, phase, phases, dependencyTitle, active, onComplete, onStart, onEdit, onDelete }: Props) {
  const effectiveStatus = getEffectiveTaskStatus(task, phases);
  const completed = effectiveStatus === "completed";
  const locked = effectiveStatus === "locked";
  const overdue = isOverdue(task.deadline, completed);

  return (
    <motion.article
      initial={false}
      animate={{ opacity: 1, backgroundColor: active ? "rgba(15,143,104,0.08)" : undefined }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.14, ease: "easeOut" }}
      className={`rounded-2xl border p-3 transition ${
        completed
          ? "border-accent/25 bg-accent/8"
          : locked
            ? "border-black/10 bg-black/[0.03] opacity-70"
            : overdue
              ? "border-red-200 bg-red-50/70"
              : "border-black/10 bg-white hover:border-black/20"
      }`}
    >
      <div className="flex gap-3">
        <button
          onClick={onComplete}
          disabled={locked}
          aria-label={completed ? "Reopen task" : "Complete task"}
          className={`mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${
            completed
              ? "border-accent bg-accent text-white"
              : locked
                ? "border-black/10 bg-white text-black/28"
                : "border-black/15 bg-paper text-black/55 hover:border-accent hover:text-accent"
          }`}
        >
          {completed ? <Check className="h-4 w-4" /> : locked ? <Lock className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/38">
                <span>{phase.title}</span>
                <span>{effectiveStatus.replace("_", " ")}</span>
              </div>
              <h3 className={`text-base font-semibold ${completed ? "text-black/50 line-through decoration-accent/60" : "text-ink"}`}>{task.title}</h3>
              {task.note && <p className="mt-1 text-sm leading-6 text-black/54">{task.note}</p>}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {!completed && !locked && (
                <button onClick={onStart} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent" aria-label="Mark in progress">
                  {effectiveStatus === "in_progress" ? <Clock3 className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>
              )}
              <button onClick={onEdit} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-accent hover:text-accent" aria-label="Edit task">
                <Pencil className="h-3.5 w-3.5" />
              </button>
              <button onClick={onDelete} className="grid h-8 w-8 place-items-center rounded-full border border-black/10 text-black/45 transition hover:border-red-400 hover:text-red-500" aria-label="Delete task">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-black/52">
            <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 ${overdue ? "border-red-300 bg-red-100 text-red-650" : "border-black/10 bg-paper"}`}>
              <CalendarDays className="h-3.5 w-3.5" />
              {formatShortDate(task.deadline)} · {getDaysAway(task.deadline)}
            </span>
            {dependencyTitle && (
              <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-paper px-2.5 py-1">
                after {dependencyTitle}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
