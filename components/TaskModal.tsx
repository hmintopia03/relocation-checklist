"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { getAllTasks } from "@/lib/store";
import type { Phase, RelocationTask, TaskStatus } from "@/lib/types";

type FormState = {
  title: string;
  note: string;
  deadline: string;
  status: TaskStatus;
  dependency: string;
};

const today = new Date().toISOString().slice(0, 10);

export function TaskModal({
  phase,
  phases,
  task,
  onClose,
  onSubmit,
}: {
  phase: Phase;
  phases: Phase[];
  task?: RelocationTask;
  onClose: () => void;
  onSubmit: (task: Omit<RelocationTask, "id"> & { id?: string }) => void;
}) {
  const [form, setForm] = useState<FormState>({
    title: task?.title ?? "",
    note: task?.note ?? "",
    deadline: task?.deadline ?? today,
    status: task?.status ?? "available",
    dependency: task?.dependsOn?.[0] ?? "",
  });

  const dependencyOptions = useMemo(() => getAllTasks(phases).filter((item) => item.id !== task?.id), [phases, task?.id]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: task?.id,
      title: form.title,
      note: form.note,
      deadline: form.deadline,
      status: form.status,
      dependsOn: form.dependency ? [form.dependency] : undefined,
    });
  };

  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="w-full max-w-xl rounded-[1.5rem] border border-black/10 bg-paper p-4 shadow-soft"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">{task ? "Edit checkpoint" : "New checkpoint"}</p>
            <h2 className="mt-1 text-2xl font-semibold">{phase.title}</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close task editor">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3">
          <input value={form.title} onChange={(event) => setForm((draft) => ({ ...draft, title: event.target.value }))} placeholder="Checkpoint title" className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
          <textarea value={form.note} onChange={(event) => setForm((draft) => ({ ...draft, note: event.target.value }))} placeholder="Optional note" rows={3} className="resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent" />
          <div className="grid gap-3 sm:grid-cols-2">
            <input type="date" value={form.deadline} onChange={(event) => setForm((draft) => ({ ...draft, deadline: event.target.value }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
            <select value={form.status} onChange={(event) => setForm((draft) => ({ ...draft, status: event.target.value as TaskStatus }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent">
              <option value="available">Available</option>
              <option value="in_progress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <select value={form.dependency} onChange={(event) => setForm((draft) => ({ ...draft, dependency: event.target.value }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent">
            <option value="">No dependency</option>
            {dependencyOptions.map((item) => (
              <option key={item.id} value={item.id}>
                After {item.phaseTitle}: {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">
            Cancel
          </button>
          <button className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent">{task ? "Save checkpoint" : "Add checkpoint"}</button>
        </div>
      </motion.form>
    </motion.div>
  );
}
