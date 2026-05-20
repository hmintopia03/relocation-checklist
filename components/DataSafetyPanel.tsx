"use client";

import { ChangeEvent, useRef, useState } from "react";
import { AlertTriangle, Download, RotateCcw, Upload } from "lucide-react";
import { exportData, hydratePhases, importData } from "@/lib/persistence";
import type { Phase } from "@/lib/types";

const formatSavedAt = (value: string) => value.replace("T", " ").slice(0, 19);

export function DataSafetyPanel({
  phases,
  error,
  lastSavedAt,
  onRestore,
  onReset,
}: {
  phases: Phase[];
  error?: string;
  lastSavedAt?: string;
  onRestore: (phases: Phase[]) => void;
  onReset: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string>();

  const downloadBackup = () => {
    const blob = new Blob([exportData(phases)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `relocation-quest-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const restoreBackup = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const text = await file.text();
    const imported = importData(text);
    if (!imported.ok) {
      setImportError(imported.error);
      return;
    }

    const confirmed = window.confirm("Restore this backup? Your current local quest data will be replaced.");
    if (!confirmed) return;

    setImportError(undefined);
    onRestore(hydratePhases(imported.data));
  };

  return (
    <section className="rounded-[1.35rem] border border-black/10 bg-white/82 p-5 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/38">Data safety</p>
          <h2 className="mt-1 text-lg font-semibold">Local backup</h2>
          <p className="mt-2 text-sm leading-6 text-black/52">Saved in this browser. Keep a JSON backup before major changes.</p>
          {lastSavedAt && <p className="mt-2 text-xs font-medium text-black/40">Last saved {formatSavedAt(lastSavedAt)}</p>}
        </div>
        <div className="grid gap-2">
          <button onClick={downloadBackup} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition hover:bg-accent">
            <Download className="h-4 w-4" />
            Download backup
          </button>
          <button onClick={() => inputRef.current?.click()} className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-black/60 transition hover:border-accent hover:text-accent">
            <Upload className="h-4 w-4" />
            Restore from backup
          </button>
          <input ref={inputRef} type="file" accept="application/json,.json" onChange={restoreBackup} className="hidden" />
        </div>
      </div>

      {(error || importError) && (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <div className="mb-1 flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-4 w-4" />
            Storage needs attention
          </div>
          <p>{importError ?? error}</p>
          <p className="mt-2 text-red-700/75">Your saved data was not silently deleted. Use Restore from backup when you have a valid JSON backup file.</p>
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-red-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Danger zone</p>
            <p className="mt-1 text-sm text-black/55">Reset replaces local data with the sample quest.</p>
          </div>
          <button
            onClick={() => {
              if (window.confirm("Reset Relocation Quest to sample data? This replaces current local data. Download a backup first if you need it.")) onReset();
            }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >
            <RotateCcw className="h-4 w-4" />
            Reset to sample data
          </button>
        </div>
      </div>
    </section>
  );
}
