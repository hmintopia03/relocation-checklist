"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ClipboardList, X } from "lucide-react";
import { splitTaskTitle } from "@/lib/taskTitle";
import type { Phase, RelocationTask, TaskStatus } from "@/lib/types";

const today = new Date().toISOString().slice(0, 10);

type BulkTaskDraft = Omit<RelocationTask, "id">;
export type BulkAddMode = "tasks" | "records";

type ParsedRecord = {
  line: number;
  raw: string;
  date: string;
  title: string;
  cost: number;
};

const currentYear = new Date().getFullYear();

const getYearFromDate = (value?: string) => {
  const year = value ? Number(value.slice(0, 4)) : NaN;
  return Number.isInteger(year) && year > 1900 ? year : currentYear;
};

const formatDate = (year: number, month: number, day: number) => `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

const parseMonthDay = (value: string, year: number) => {
  const match = value.trim().match(/^(\d{1,2})\.(\d{1,2})$/);
  if (!match) return undefined;
  const month = Number(match[1]);
  const day = Number(match[2]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return undefined;
  return formatDate(year, month, day);
};

const parseCost = (value: string) => {
  const normalized = value.replace(/,/g, "").trim();
  if (!normalized) return undefined;
  const cost = Number(normalized);
  return Number.isFinite(cost) ? cost : undefined;
};

export function parseBulkTaskLines(value: string) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap(splitTaskTitle);
}

export function parseCompletedRecordLines(value: string, year: number) {
  const records: ParsedRecord[] = [];
  const errors: string[] = [];

  value.split(/\r?\n/).forEach((rawLine, index) => {
    const raw = rawLine.trim();
    if (!raw) return;
    const parts = raw.split("|").map((part) => part.trim());
    if (parts.length !== 3) {
      errors.push(`Line ${index + 1}: use date | title | cost.`);
      return;
    }
    const date = parseMonthDay(parts[0], year);
    if (!date) {
      errors.push(`Line ${index + 1}: invalid date "${parts[0]}".`);
      return;
    }
    if (!parts[1]) {
      errors.push(`Line ${index + 1}: title is required.`);
      return;
    }
    const cost = parseCost(parts[2]);
    if (cost === undefined) {
      errors.push(`Line ${index + 1}: invalid cost "${parts[2]}".`);
      return;
    }
    records.push({ line: index + 1, raw, date, title: parts[1], cost });
  });

  return { records, errors };
}

export function BulkAddTasks({
  phases,
  defaultPhaseId,
  initialMode = "tasks",
  onClose,
  onCreate,
}: {
  phases: Phase[];
  defaultPhaseId: string;
  initialMode?: BulkAddMode;
  onClose: () => void;
  onCreate: (phaseId: string, tasks: BulkTaskDraft[]) => void;
}) {
  const [rawText, setRawText] = useState("");
  const [mode, setMode] = useState<BulkAddMode>(initialMode);
  const [phaseId, setPhaseId] = useState(defaultPhaseId);
  const [deadline, setDeadline] = useState(today);
  const [status, setStatus] = useState<TaskStatus>("available");
  const [error, setError] = useState<string>();
  const [createdCount, setCreatedCount] = useState<number>();
  const [isSubmitting, setSubmitting] = useState(false);

  const parsedTitles = useMemo(() => parseBulkTaskLines(rawText), [rawText]);
  const selectedPhase = phases.find((phase) => phase.id === phaseId) ?? phases[0];
  const importYear = getYearFromDate(selectedPhase?.startDate);
  const parsedRecords = useMemo(() => parseCompletedRecordLines(rawText, importYear), [rawText, importYear]);
  const previewCount = mode === "records" ? parsedRecords.records.length : parsedTitles.length;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (mode === "records") {
      if (parsedRecords.errors.length) {
        setError("Fix the invalid lines before importing.");
        return;
      }
      if (!parsedRecords.records.length) {
        setError("Paste at least one record in date | title | cost format.");
        return;
      }

      const confirmed = window.confirm(`Import ${parsedRecords.records.length} completed records to "${selectedPhase.title}"? Existing tasks will be kept.`);
      if (!confirmed) return;

      setSubmitting(true);
      setError(undefined);
      onCreate(
        selectedPhase.id,
        parsedRecords.records.map((record) => ({
          title: record.title,
          deadline: record.date,
          completedAt: record.date,
          cost: record.cost,
          status: "completed",
        })),
      );
      setCreatedCount(parsedRecords.records.length);
      setRawText("");
      window.setTimeout(() => {
        setSubmitting(false);
        onClose();
      }, 650);
      return;
    }

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-black/10 bg-paper shadow-soft"
      >
        <div className="flex items-start justify-between gap-4 border-b border-black/8 p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">{mode === "records" ? "Import completed records" : "Bulk add"}</p>
            <h2 className="mt-1 text-2xl font-semibold">{mode === "records" ? "Paste preparation records" : "Paste task list"}</h2>
            <p className="mt-1 text-sm text-black/52">{mode === "records" ? "Use one record per line: 3.5 | title | cost. Imported records are completed." : "Each non-empty line becomes one task. Commas stay inside the title."}</p>
            <div className="mt-3 inline-flex rounded-full border border-black/10 bg-white/65 p-1">
              {[
                ["tasks", "Task list"],
                ["records", "Completed records"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setMode(id as BulkAddMode);
                    setError(undefined);
                    setCreatedCount(undefined);
                  }}
                  className={`h-8 rounded-full px-3 text-xs font-semibold transition ${mode === id ? "bg-accent/10 text-accent" : "text-black/45 hover:text-ink"}`}
                >
                  {label}
                </button>
              ))}
            </div>
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
              placeholder={mode === "records" ? "3.5 | 치과 검진 | 42000\n6.3 | 클라우드 백업 | 0" : "국제학생증\n한국 관련 서비스 해지하기\nFinal luggage optimization"}
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
              {mode === "records" ? (
                <div className="flex h-11 items-center rounded-xl border border-black/10 bg-white px-3 text-sm font-medium text-black/45 sm:col-span-2">Year: {importYear} · Marked completed</div>
              ) : (
                <>
                  <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent" />
                  <select value={status} onChange={(event) => setStatus(event.target.value as TaskStatus)} className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none transition focus:border-accent">
                    <option value="available">Available</option>
                    <option value="in_progress">In progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </>
              )}
            </div>
            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">{error}</p>}
            {mode === "records" && parsedRecords.errors.length > 0 && (
              <div className="max-h-28 overflow-y-auto rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm leading-6 text-red-600">
                {parsedRecords.errors.map((message) => (
                  <p key={message}>{message}</p>
                ))}
              </div>
            )}
          </div>

          <aside className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Preview</p>
                <h3 className="text-lg font-semibold">{previewCount} {mode === "records" ? "records" : "tasks"}</h3>
              </div>
              <ClipboardList className="h-5 w-5 text-accent" />
            </div>

            {mode === "records" ? (
              parsedRecords.records.length ? (
                <ol className="max-h-72 space-y-2 overflow-y-auto pr-1">
                  {parsedRecords.records.map((record) => (
                    <li key={`${record.line}-${record.raw}`} className="rounded-xl border border-black/8 bg-paper/60 px-3 py-2 text-sm leading-5">
                      <span className="block font-semibold">{record.title}</span>
                      <span className="mt-1 block text-xs font-medium text-black/42">{record.date} · cost {record.cost.toLocaleString()}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-xl border border-dashed border-black/12 bg-paper/50 p-5 text-sm leading-6 text-black/45">Paste records to preview completed checkpoints before importing.</div>
              )
            ) : parsedTitles.length ? (
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
                {mode === "records" ? "Imported" : "Added"} {createdCount} {mode === "records" ? "records" : "tasks"}
              </div>
            )}
          </aside>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-black/8 p-4">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">
            Cancel
          </button>
          <button disabled={isSubmitting || !previewCount || (mode === "records" && parsedRecords.errors.length > 0)} className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent disabled:bg-black/20">
            {mode === "records" ? `Import ${previewCount || ""} records` : `Add ${previewCount || ""} tasks`}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
