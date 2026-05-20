"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ClipboardList, X } from "lucide-react";
import type { Phase, RelocationTask, TaskStatus } from "@/lib/types";

const today = new Date().toISOString().slice(0, 10);

type BulkTaskDraft = Omit<RelocationTask, "id">;

export function parseBulkTaskLines(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function BulkAddTasks({
  phases,
  defaultPhaseId,
  onClose,
  onCreate,
}: {
  phases: Phase[];
  defaultPhaseId: string;
  onClose: () => void;
  onCreate: (phaseId: string, tasks: BulkTaskDraft[]) => void;
}) {
  const [rawText, setRawText] = useState("");
  const [phaseId, setPhaseId] = useState(defaultPhaseId);
  const [deadline, setDeadline] = useState(today);
  const [status, setStatus] = useState<TaskStatus>("available");
  const [error, setError] = useState<string>();
  const [createdCount, setCreatedCount] = useState<number>();
  const [isSubmitting, setSubmitting] = useState(false);

  const parsedTitles = useMemo(() => parseBulkTaskLines(rawText), [rawText]);
  const selectedPhase = phases.find((phase) => phase.id === phaseId) ?? phases[0];

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!parsedTitles.length) {
      setError("Paste at least one non-empty line.");
      return;
    }

    const confirmed = window.confirm(`Add ${parsedTitles.length} tasks to "${selectedPhase.title}"? Existing tasks will be kept.`);
    if (!confirmed) return;

    setSubmitting(true);
    setError(undefined);
    onCreate(
      selectedPhase.id,
      parsedTitles.map((title) => ({
        title,
        deadline,
        status,
      })),
    );
    setCreatedCount(parsedTitles.length);
    setRawText("");
    window.setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 650);
  };

  return (
    <motion.div className="fixed inset-0 z-40 grid place-items-end bg-black/20 p-3 backdrop-blur-sm sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-black/10 bg-paper shadow-soft"
      >
        <div className="flex items-start justify-between gap-4 border-b border-black/8 p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Bulk add</p>
            <h2 className="mt-1 text-2xl font-semibold">Paste task list</h2>
            <p className="mt-1 text-sm text-black/52">Each non-empty line becomes one task. Commas stay inside the title.</p>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/55">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid max-h-[calc(92vh-8rem)] gap-4 overflow-y-auto p-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-3">
            <textarea
              value={rawText}
              onChange={(event) => {
                setRawText(event.target.value);
                setError(undefined);
              }}
              placeholder={"국제학생증\n한국 관련 서비스 해지하기\nFinal luggage optimization"}
              rows={12}
              className="min-h-64 w-full resize-y rounded-2xl border border-black/10 bg-white p-4 text-base leading-7 outline-none transition focus:border-accent"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <select value={phaseId} onChange={(event) => setPhaseId(event.target.value)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent sm:col-span-1">
                {phases.map((phase) => (
                  <option key={phase.id} value={phase.id}>
                    {phase.title}
                  </option>
                ))}
              </select>
              <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent" />
              <select value={status} onChange={(event) => setStatus(event.target.value as TaskStatus)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
                <option value="available">Available</option>
                <option value="in_progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{error}</p>}
          </div>

          <aside className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Preview</p>
                <h3 className="text-lg font-semibold">{parsedTitles.length} tasks</h3>
              </div>
              <ClipboardList className="h-5 w-5 text-accent" />
            </div>

            {parsedTitles.length ? (
              <ol className="max-h-72 space-y-2 overflow-y-auto pr-1">
                {parsedTitles.map((title, index) => (
                  <li key={`${title}-${index}`} className="rounded-xl border border-black/8 bg-paper/60 px-3 py-2 text-sm leading-5">
                    {title}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="rounded-xl border border-dashed border-black/12 bg-paper/50 p-5 text-sm leading-6 text-black/45">Paste a list to preview tasks before creating them.</div>
            )}

            {createdCount !== undefined && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/8 px-3 py-2 text-sm font-semibold text-accent">
                <Check className="h-4 w-4" />
                Added {createdCount} tasks
              </div>
            )}
          </aside>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-black/8 p-4">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">
            Cancel
          </button>
          <button disabled={isSubmitting || !parsedTitles.length} className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent disabled:bg-black/20">
            Add {parsedTitles.length || ""} tasks
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
