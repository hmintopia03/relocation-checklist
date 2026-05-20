# Relocation Quest

Relocation Quest is a minimal, polished relocation checklist app built around phases instead of generic todos. The product idea is that moving countries should feel like clearing stages of a journey: calm, visible, and emotionally stabilizing.

The starter quest models a Korea to Berlin relocation with four phases:

- Before Departure
- Arrival Survival
- Airbnb Period
- Long-Term Settlement

Each phase has a description, date range, task list, and completion percentage. Tasks support notes, deadlines, status, and dependency IDs so later checkpoints can unlock when earlier work is cleared.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zustand with localStorage persistence
- Framer Motion
- lucide-react icons

## Features

- Timeline/progression view inspired by transport maps and boarding passes
- Current phase focus view
- All open tasks view
- Completed tasks archive
- Add, edit, and delete phases
- Add, edit, and delete tasks
- Available, in progress, completed, and dependency-locked task states
- Smooth task completion animation
- Subtle phase completion celebration
- Offline-first localStorage persistence
- Versioned localStorage schema with JSON backup export/import
- Import validation before replacing local data
- Corrupted storage warning with backup restore path
- Responsive, grayscale UI with a single green accent

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  PhaseModal.tsx
  ProgressBar.tsx
  SegmentedNav.tsx
  TaskCard.tsx
  TaskModal.tsx
lib/
  date.ts
  persistence.ts
  seed.ts
  store.ts
  types.ts
```

## Persistence

Relocation Quest stores data locally under a versioned schema:

```json
{
  "version": 1,
  "phases": [],
  "tasks": [],
  "updatedAt": "2026-05-20T00:00:00.000Z"
}
```

Sample data is written only when no saved data exists. Existing saved data is loaded first, and corrupted storage is surfaced in the UI instead of being silently deleted. Use **Download backup** to export a JSON file and **Restore from backup** to validate and replace local data.

## Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Roadmap

- Data import/export
- Multiple relocation quest templates
- Calendar integration
- Reminder and notification layer
- Authentication and synced cloud storage
- AI-assisted task suggestions
- Phase-level attachments and document vault
