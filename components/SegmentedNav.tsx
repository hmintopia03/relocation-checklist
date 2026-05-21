"use client";

import { Archive, ListChecks, Map } from "lucide-react";
import type { ViewMode } from "@/lib/types";

const items: Array<{ id: ViewMode; label: string; icon: React.ReactNode }> = [
  { id: "timeline", label: "Progress", icon: <Map /> },
  { id: "categories", label: "Categories", icon: <ListChecks /> },
  { id: "packing", label: "Packing", icon: <Archive /> },
  { id: "tasks", label: "All Tasks", icon: <ListChecks /> },
  { id: "archive", label: "Archive", icon: <Archive /> },
];

export function SegmentedNav({ value, onChange }: { value: ViewMode; onChange: (value: ViewMode) => void }) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-black/10 bg-white/70 p-1 sm:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold transition ${
            value === item.id ? "bg-ink text-white shadow-sm" : "text-black/55 hover:bg-black/[0.04] hover:text-ink"
          }`}
        >
          <span className="[&_svg]:h-4 [&_svg]:w-4">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
