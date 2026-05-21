"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Phase, RelocationTask } from "@/lib/types";

export function TaskTextModal({
  phase,
  task,
  onClose,
  onSubmit,
}: {
  phase: Phase;
  task: RelocationTask;
  onClose: () => void;
  onSubmit: (task: Pick<RelocationTask, "title" | "note">) => void;
}) {
  const [title, setTitle] = useState(task.title);
  const [note, setNote] = useState(task.note ?? "");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    onSubmit({ title: cleanTitle, note: note.trim() });
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">Edit text</p>
            <h2 className="mt-1 text-2xl font-semibold">{phase.title}</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55" aria-label="Close text editor">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Checkpoint title"
            className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent"
            autoFocus
          />
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Optional note"
            rows={4}
            className="resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">
            Cancel
          </button>
          <button disabled={!title.trim()} className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent disabled:bg-black/20">
            Save text
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
