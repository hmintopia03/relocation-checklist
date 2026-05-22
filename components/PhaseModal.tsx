"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Phase } from "@/lib/types";

type FormState = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

const today = new Date().toISOString().slice(0, 10);

export function PhaseModal({
  phase,
  onClose,
  onSubmit,
}: {
  phase?: Phase;
  onClose: () => void;
  onSubmit: (phase: FormState) => void;
}) {
  const [form, setForm] = useState<FormState>({
    title: phase?.title ?? "",
    description: phase?.description ?? "",
    startDate: phase?.startDate ?? today,
    endDate: phase?.endDate ?? today,
  });

  useEffect(() => {
    setForm({
      title: phase?.title ?? "",
      description: phase?.description ?? "",
      startDate: phase?.startDate ?? today,
      endDate: phase?.endDate ?? today,
    });
  }, [phase]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(form);
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40">{phase ? "Edit stage" : "New stage"}</p>
            <h2 className="mt-1 text-2xl font-semibold">{phase ? phase.title : "Add phase"}</h2>
          </div>
          <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-black/55">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3">
          <input value={form.title} onChange={(event) => setForm((draft) => ({ ...draft, title: event.target.value }))} placeholder="Phase title" className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
          <textarea
            value={form.description}
            onChange={(event) => setForm((draft) => ({ ...draft, description: event.target.value }))}
            placeholder="Phase description"
            rows={3}
            className="resize-none rounded-xl border border-black/10 bg-white p-3 outline-none transition focus:border-accent"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input type="date" value={form.startDate} onChange={(event) => setForm((draft) => ({ ...draft, startDate: event.target.value }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
            <input type="date" value={form.endDate} onChange={(event) => setForm((draft) => ({ ...draft, endDate: event.target.value }))} className="h-12 rounded-xl border border-black/10 bg-white px-3 outline-none transition focus:border-accent" />
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="h-11 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60">
            Cancel
          </button>
          <button className="h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-accent">{phase ? "Save phase" : "Add phase"}</button>
        </div>
      </motion.form>
    </motion.div>
  );
}
