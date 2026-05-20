import { seedPhases } from "./seed";
import type { Phase, RelocationTask, TaskStatus } from "./types";

export const STORAGE_KEY = "relocation-quest-data-v1";
const LEGACY_STORAGE_KEY = "relocation-quest-state-v2";
export const STORAGE_VERSION = 1;

export type StoredPhase = Omit<Phase, "tasks">;

export type StoredTask = RelocationTask & {
  phaseId: string;
};

export type RelocationStorageData = {
  version: 1;
  phases: StoredPhase[];
  tasks: StoredTask[];
  updatedAt: string;
};

export type LoadDataResult =
  | { status: "loaded"; data: RelocationStorageData; error?: undefined }
  | { status: "seeded"; data: RelocationStorageData; error?: undefined }
  | { status: "error"; data: RelocationStorageData; error: string };

const validStatuses: TaskStatus[] = ["available", "in_progress", "completed"];

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value && typeof value === "object" && !Array.isArray(value));

const isString = (value: unknown) => typeof value === "string";

export const flattenPhases = (phases: Phase[]): RelocationStorageData => ({
  version: STORAGE_VERSION,
  phases: phases.map(({ tasks, ...phase }) => phase),
  tasks: phases.flatMap((phase) => phase.tasks.map((task) => ({ ...task, phaseId: phase.id }))),
  updatedAt: new Date().toISOString(),
});

export const hydratePhases = (data: RelocationStorageData): Phase[] =>
  data.phases.map((phase) => ({
    ...phase,
    tasks: data.tasks.filter((task) => task.phaseId === phase.id).map(({ phaseId, ...task }) => task),
  }));

const seedData = () => flattenPhases(seedPhases);

const validatePhase = (phase: unknown): phase is StoredPhase => {
  if (!isRecord(phase)) return false;
  return isString(phase.id) && isString(phase.title) && isString(phase.description) && isString(phase.startDate) && isString(phase.endDate);
};

const validateTask = (task: unknown, phaseIds: Set<string>): task is StoredTask => {
  if (!isRecord(task)) return false;
  const dependsOn = task.dependsOn;
  return (
    isString(task.id) &&
    isString(task.phaseId) &&
    phaseIds.has(task.phaseId) &&
    isString(task.title) &&
    isString(task.deadline) &&
    isString(task.status) &&
    validStatuses.includes(task.status as TaskStatus) &&
    (task.note === undefined || isString(task.note)) &&
    (task.createdAt === undefined || isString(task.createdAt)) &&
    (dependsOn === undefined || (Array.isArray(dependsOn) && dependsOn.every(isString)))
  );
};

export const validateData = (value: unknown): { ok: true; data: RelocationStorageData } | { ok: false; error: string } => {
  if (!isRecord(value)) return { ok: false, error: "Backup is not a JSON object." };
  if (value.version !== STORAGE_VERSION) return { ok: false, error: `Unsupported backup version. Expected version ${STORAGE_VERSION}.` };
  if (!Array.isArray(value.phases)) return { ok: false, error: "Backup is missing a phases array." };
  if (!Array.isArray(value.tasks)) return { ok: false, error: "Backup is missing a tasks array." };
  if (!isString(value.updatedAt)) return { ok: false, error: "Backup is missing updatedAt." };
  if (!value.phases.every(validatePhase)) return { ok: false, error: "One or more phases are invalid." };

  const phaseIds = new Set(value.phases.map((phase) => phase.id));
  if (phaseIds.size !== value.phases.length) return { ok: false, error: "Phase IDs must be unique." };
  if (!value.tasks.every((task) => validateTask(task, phaseIds))) return { ok: false, error: "One or more tasks are invalid." };

  const taskIds = new Set(value.tasks.map((task) => task.id));
  if (taskIds.size !== value.tasks.length) return { ok: false, error: "Task IDs must be unique." };
  for (const task of value.tasks) {
    for (const dependencyId of task.dependsOn ?? []) {
      if (!taskIds.has(dependencyId)) return { ok: false, error: `Task "${task.title}" depends on a task that does not exist.` };
      if (dependencyId === task.id) return { ok: false, error: `Task "${task.title}" cannot depend on itself.` };
    }
  }

  return { ok: true, data: value as RelocationStorageData };
};

const readLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(key);
};

const writeLocalStorage = (key: string, value: string) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
};

const migrateLegacyData = (): RelocationStorageData | null => {
  const raw = readLocalStorage(LEGACY_STORAGE_KEY);
  if (!raw) return null;
  const parsed = JSON.parse(raw) as unknown;
  if (!isRecord(parsed) || !isRecord(parsed.state) || !Array.isArray(parsed.state.phases)) return null;
  const phases = parsed.state.phases as Phase[];
  const migrated = flattenPhases(phases);
  saveData(migrated);
  return migrated;
};

export const loadData = (): LoadDataResult => {
  try {
    const raw = readLocalStorage(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as unknown;
      const validated = validateData(parsed);
      if (validated.ok) return { status: "loaded", data: validated.data };
      return { status: "error", data: { version: STORAGE_VERSION, phases: [], tasks: [], updatedAt: new Date().toISOString() }, error: validated.error };
    }

    const migrated = migrateLegacyData();
    if (migrated) return { status: "loaded", data: migrated };

    const seeded = seedData();
    saveData(seeded);
    return { status: "seeded", data: seeded };
  } catch (error) {
    return {
      status: "error",
      data: { version: STORAGE_VERSION, phases: [], tasks: [], updatedAt: new Date().toISOString() },
      error: error instanceof Error ? error.message : "Saved relocation data could not be read.",
    };
  }
};

export const saveData = (data: RelocationStorageData) => {
  const validated = validateData(data);
  if (!validated.ok) throw new Error(validated.error);
  writeLocalStorage(STORAGE_KEY, JSON.stringify({ ...validated.data, updatedAt: new Date().toISOString() }));
};

export const exportData = (phases: Phase[]) => JSON.stringify(flattenPhases(phases), null, 2);

export const importData = (json: string): { ok: true; data: RelocationStorageData } | { ok: false; error: string } => {
  try {
    const parsed = JSON.parse(json) as unknown;
    return validateData(parsed);
  } catch {
    return { ok: false, error: "Backup file is not valid JSON." };
  }
};

export const createSeedStorageData = seedData;
