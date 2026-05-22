import { seedInventoryCategories, seedInventoryItems, seedInventoryTopics, seedPackingContainers, seedPhases } from "./seed";
import type { BuyLocation, InventoryCategory, InventoryItem, InventoryPriority, InventoryStatus, InventoryTopic, InventoryTransportStatus, PackingContainer, Phase, RelocationTask, TaskStatus } from "./types";

export const STORAGE_KEY = "relocation-quest-data-v1";
const LEGACY_STORAGE_KEY = "relocation-quest-state-v2";
export const STORAGE_VERSION = 3;

export type StoredPhase = Omit<Phase, "tasks">;

export type StoredTask = RelocationTask & {
  phaseId: string;
};

export type RelocationStorageData = {
  version: 3;
  phases: StoredPhase[];
  tasks: StoredTask[];
  inventoryCategories: InventoryCategory[];
  inventoryTopics: InventoryTopic[];
  inventoryItems: InventoryItem[];
  packingContainers: PackingContainer[];
  updatedAt: string;
};

export type LoadDataResult =
  | { status: "loaded"; data: RelocationStorageData; error?: undefined }
  | { status: "seeded"; data: RelocationStorageData; error?: undefined }
  | { status: "error"; data: RelocationStorageData; error: string };

const validStatuses: TaskStatus[] = ["available", "in_progress", "completed"];
const validInventoryStatuses: InventoryStatus[] = ["already_have", "need_to_buy", "bought", "optional", "important"];
const validBuyLocations: BuyLocation[] = ["none", "korea", "germany"];
const validInventoryPriorities: InventoryPriority[] = ["low", "medium", "high"];
const validTransportStatuses: InventoryTransportStatus[] = ["bring", "cannot_bring", "buy_in_germany", "leave_behind"];

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value && typeof value === "object" && !Array.isArray(value));

const isString = (value: unknown) => typeof value === "string";

export const flattenData = (phases: Phase[], inventoryCategories: InventoryCategory[] = seedInventoryCategories, inventoryItems: InventoryItem[] = seedInventoryItems, packingContainers: PackingContainer[] = seedPackingContainers, inventoryTopics: InventoryTopic[] = seedInventoryTopics): RelocationStorageData => ({
  version: STORAGE_VERSION,
  phases: phases.map(({ tasks, ...phase }) => phase),
  tasks: phases.flatMap((phase) => phase.tasks.map((task, index) => ({ ...task, order: task.order ?? index, phaseId: phase.id }))),
  inventoryCategories,
  inventoryTopics: inventoryTopics.map((topic, index) => ({ ...topic, order: topic.order ?? index })),
  inventoryItems: inventoryItems.map((item, index) => ({ ...item, packingOrder: item.packingOrder ?? index, transportStatus: item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring"), containerId: (item.transportStatus && item.transportStatus !== "bring") || (!item.transportStatus && item.buyLocation === "germany") ? undefined : item.containerId })),
  packingContainers,
  updatedAt: new Date().toISOString(),
});

export const flattenPhases = flattenData;

export const hydratePhases = (data: RelocationStorageData): Phase[] =>
  data.phases.map((phase) => {
    const phaseTasks = data.tasks
      .filter((task) => task.phaseId === phase.id)
      .map(({ phaseId, ...task }, index) => ({ ...task, order: task.order ?? index }))
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    return { ...phase, tasks: phaseTasks };
  });

const seedData = () => flattenData(seedPhases, seedInventoryCategories, seedInventoryItems, seedPackingContainers, seedInventoryTopics);

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
    (task.completedAt === undefined || isString(task.completedAt)) &&
    (task.cost === undefined || typeof task.cost === "number") &&
    (task.createdAt === undefined || isString(task.createdAt)) &&
    (task.order === undefined || typeof task.order === "number") &&
    (dependsOn === undefined || (Array.isArray(dependsOn) && dependsOn.every(isString)))
  );
};

const validateInventoryCategory = (category: unknown): category is InventoryCategory => isRecord(category) && isString(category.id) && isString(category.name);

const validateInventoryTopic = (topic: unknown, categoryIds: Set<string>): topic is InventoryTopic =>
  isRecord(topic) &&
  isString(topic.id) &&
  isString(topic.categoryId) &&
  categoryIds.has(topic.categoryId) &&
  isString(topic.name) &&
  (topic.order === undefined || typeof topic.order === "number");

const validatePackingContainer = (container: unknown): container is PackingContainer => isRecord(container) && isString(container.id) && isString(container.name);

const validateInventoryItem = (item: unknown, categoryIds: Set<string>, topicIds: Set<string>, containerIds: Set<string>): item is InventoryItem => {
  if (!isRecord(item)) return false;
  return (
    isString(item.id) &&
    isString(item.name) &&
    isString(item.categoryId) &&
    categoryIds.has(item.categoryId) &&
    isString(item.quantity) &&
    isString(item.status) &&
    validInventoryStatuses.includes(item.status as InventoryStatus) &&
    isString(item.buyLocation) &&
    validBuyLocations.includes(item.buyLocation as BuyLocation) &&
    (item.transportStatus === undefined || (isString(item.transportStatus) && validTransportStatuses.includes(item.transportStatus as InventoryTransportStatus))) &&
    isString(item.priority) &&
    validInventoryPriorities.includes(item.priority as InventoryPriority) &&
    (item.topicId === undefined || (isString(item.topicId) && topicIds.has(item.topicId))) &&
    (item.topic === undefined || isString(item.topic)) &&
    (item.notes === undefined || isString(item.notes)) &&
    (item.containerId === undefined || (isString(item.containerId) && containerIds.has(item.containerId))) &&
    (item.packed === undefined || typeof item.packed === "boolean") &&
    (item.packingOrder === undefined || typeof item.packingOrder === "number")
  );
};

const emptyData = (): RelocationStorageData => ({
  version: STORAGE_VERSION,
  phases: [],
  tasks: [],
  inventoryCategories: [],
  inventoryTopics: [],
  inventoryItems: [],
  packingContainers: [],
  updatedAt: new Date().toISOString(),
});

const withStoredOrder = (data: RelocationStorageData): RelocationStorageData => ({
  ...data,
  tasks: data.tasks.map((task, index) => ({ ...task, order: task.order ?? index })),
  inventoryTopics: data.inventoryTopics.map((topic, index) => ({ ...topic, order: topic.order ?? index })),
  inventoryItems: data.inventoryItems.map((item, index) => ({ ...item, packingOrder: item.packingOrder ?? index, transportStatus: item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring"), containerId: (item.transportStatus && item.transportStatus !== "bring") || (!item.transportStatus && item.buyLocation === "germany") ? undefined : item.containerId })),
});

const topicIdFromName = (categoryId: string, name: string) =>
  `topic-${categoryId}-${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "topic"}`;

const migrateInventoryTopics = (items: InventoryItem[], existingTopics: InventoryTopic[] = []) => {
  const topics = [...existingTopics];
  const topicByKey = new Map(topics.map((topic) => [`${topic.categoryId}:${topic.name.trim().toLowerCase()}`, topic]));
  const nextItems = items.map((item) => {
    if (item.topicId || !item.topic?.trim()) return item;
    const key = `${item.categoryId}:${item.topic.trim().toLowerCase()}`;
    let topic = topicByKey.get(key);
    if (!topic) {
      topic = { id: topicIdFromName(item.categoryId, item.topic), categoryId: item.categoryId, name: item.topic.trim(), order: topics.length };
      while (topics.some((candidate) => candidate.id === topic?.id)) topic = { ...topic, id: `${topic.id}-${topics.length}` };
      topics.push(topic);
      topicByKey.set(key, topic);
    }
    return { ...item, topicId: topic.id, topic: undefined };
  });
  return { topics, items: nextItems };
};

const migrateV1Data = (value: Record<string, unknown>): RelocationStorageData | null => {
  if (value.version !== 1 || !Array.isArray(value.phases) || !Array.isArray(value.tasks) || !isString(value.updatedAt)) return null;
  const phaseIds = new Set((value.phases as StoredPhase[]).map((phase) => phase.id));
  if (!value.phases.every(validatePhase)) return null;
  if (!value.tasks.every((task) => validateTask(task, phaseIds))) return null;
  return {
    version: STORAGE_VERSION,
    phases: value.phases as StoredPhase[],
    tasks: (value.tasks as StoredTask[]).map((task, index) => ({ ...task, order: task.order ?? index })),
    inventoryCategories: seedInventoryCategories,
    inventoryTopics: seedInventoryTopics,
    inventoryItems: seedInventoryItems.map((item, index) => ({ ...item, packingOrder: item.packingOrder ?? index, transportStatus: item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring"), containerId: item.buyLocation === "germany" ? undefined : item.containerId })),
    packingContainers: seedPackingContainers,
    updatedAt: new Date().toISOString(),
  };
};

const migrateV2Data = (value: Record<string, unknown>): RelocationStorageData | null => {
  if (value.version !== 2 || !Array.isArray(value.phases) || !Array.isArray(value.tasks) || !Array.isArray(value.inventoryCategories) || !Array.isArray(value.inventoryItems) || !Array.isArray(value.packingContainers) || !isString(value.updatedAt)) return null;
  if (!value.phases.every(validatePhase)) return null;
  const phaseIds = new Set((value.phases as StoredPhase[]).map((phase) => phase.id));
  if (!value.tasks.every((task) => validateTask(task, phaseIds))) return null;
  if (!value.inventoryCategories.every(validateInventoryCategory)) return null;
  if (!value.packingContainers.every(validatePackingContainer)) return null;
  const categoryIds = new Set((value.inventoryCategories as InventoryCategory[]).map((category) => category.id));
  const containerIds = new Set((value.packingContainers as PackingContainer[]).map((container) => container.id));
  const rawItems = value.inventoryItems as unknown[];
  if (!rawItems.every((item) => isRecord(item) && isString(item.id) && isString(item.name) && isString(item.categoryId) && categoryIds.has(item.categoryId) && isString(item.quantity) && isString(item.status) && validInventoryStatuses.includes(item.status as InventoryStatus) && isString(item.buyLocation) && validBuyLocations.includes(item.buyLocation as BuyLocation) && isString(item.priority) && validInventoryPriorities.includes(item.priority as InventoryPriority) && (item.containerId === undefined || (isString(item.containerId) && containerIds.has(item.containerId))))) return null;
  const migrated = migrateInventoryTopics(rawItems as InventoryItem[]);
  return {
    version: STORAGE_VERSION,
    phases: value.phases as StoredPhase[],
    tasks: (value.tasks as StoredTask[]).map((task, index) => ({ ...task, order: task.order ?? index })),
    inventoryCategories: value.inventoryCategories as InventoryCategory[],
    inventoryTopics: migrated.topics.map((topic, index) => ({ ...topic, order: topic.order ?? index })),
    inventoryItems: migrated.items.map((item, index) => ({ ...item, packingOrder: item.packingOrder ?? index, transportStatus: item.transportStatus ?? (item.buyLocation === "germany" ? "buy_in_germany" : "bring"), containerId: (item.transportStatus && item.transportStatus !== "bring") || (!item.transportStatus && item.buyLocation === "germany") ? undefined : item.containerId })),
    packingContainers: value.packingContainers as PackingContainer[],
    updatedAt: new Date().toISOString(),
  };
};

export const validateData = (value: unknown): { ok: true; data: RelocationStorageData } | { ok: false; error: string } => {
  if (!isRecord(value)) return { ok: false, error: "Backup is not a JSON object." };
  if (value.version !== STORAGE_VERSION) {
    const migratedV2 = migrateV2Data(value);
    if (migratedV2) return { ok: true, data: migratedV2 };
    const migrated = migrateV1Data(value);
    if (migrated) return { ok: true, data: migrated };
    return { ok: false, error: `Unsupported backup version. Expected version ${STORAGE_VERSION}.` };
  }
  if (!Array.isArray(value.phases)) return { ok: false, error: "Backup is missing a phases array." };
  if (!Array.isArray(value.tasks)) return { ok: false, error: "Backup is missing a tasks array." };
  if (!Array.isArray(value.inventoryCategories)) return { ok: false, error: "Backup is missing an inventoryCategories array." };
  if (!Array.isArray(value.inventoryTopics)) return { ok: false, error: "Backup is missing an inventoryTopics array." };
  if (!Array.isArray(value.inventoryItems)) return { ok: false, error: "Backup is missing an inventoryItems array." };
  if (!Array.isArray(value.packingContainers)) return { ok: false, error: "Backup is missing a packingContainers array." };
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

  if (!value.inventoryCategories.every(validateInventoryCategory)) return { ok: false, error: "One or more inventory categories are invalid." };
  const categoryIds = new Set(value.inventoryCategories.map((category) => category.id));
  if (!value.inventoryTopics.every((topic) => validateInventoryTopic(topic, categoryIds))) return { ok: false, error: "One or more inventory topics are invalid." };
  if (!value.packingContainers.every(validatePackingContainer)) return { ok: false, error: "One or more packing containers are invalid." };
  const topicIds = new Set(value.inventoryTopics.map((topic) => topic.id));
  const containerIds = new Set(value.packingContainers.map((container) => container.id));
  if (categoryIds.size !== value.inventoryCategories.length) return { ok: false, error: "Inventory category IDs must be unique." };
  if (topicIds.size !== value.inventoryTopics.length) return { ok: false, error: "Inventory topic IDs must be unique." };
  if (containerIds.size !== value.packingContainers.length) return { ok: false, error: "Packing container IDs must be unique." };
  if (!value.inventoryItems.every((item) => validateInventoryItem(item, categoryIds, topicIds, containerIds))) return { ok: false, error: "One or more inventory items are invalid." };
  const inventoryItemIds = new Set(value.inventoryItems.map((item) => item.id));
  if (inventoryItemIds.size !== value.inventoryItems.length) return { ok: false, error: "Inventory item IDs must be unique." };

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
      if (validated.ok) {
        const normalized = withStoredOrder(validated.data);
        if (isRecord(parsed) && (parsed.version !== STORAGE_VERSION || normalized.tasks.some((task, index) => task.order !== validated.data.tasks[index]?.order) || normalized.inventoryTopics.some((topic, index) => topic.order !== validated.data.inventoryTopics[index]?.order) || normalized.inventoryItems.some((item, index) => item.packingOrder !== validated.data.inventoryItems[index]?.packingOrder || item.transportStatus !== validated.data.inventoryItems[index]?.transportStatus || item.containerId !== validated.data.inventoryItems[index]?.containerId))) saveData(normalized);
        return { status: "loaded", data: normalized };
      }
      return { status: "error", data: emptyData(), error: validated.error };
    }

    const migrated = migrateLegacyData();
    if (migrated) return { status: "loaded", data: migrated };

    const seeded = seedData();
    saveData(seeded);
    return { status: "seeded", data: seeded };
  } catch (error) {
    return {
      status: "error",
      data: emptyData(),
      error: error instanceof Error ? error.message : "Saved relocation data could not be read.",
    };
  }
};

export const saveData = (data: RelocationStorageData) => {
  const validated = validateData(data);
  if (!validated.ok) throw new Error(validated.error);
  writeLocalStorage(STORAGE_KEY, JSON.stringify({ ...validated.data, updatedAt: new Date().toISOString() }));
};

export const exportData = (phases: Phase[], inventoryCategories?: InventoryCategory[], inventoryItems?: InventoryItem[], packingContainers?: PackingContainer[], inventoryTopics?: InventoryTopic[]) => JSON.stringify(flattenData(phases, inventoryCategories, inventoryItems, packingContainers, inventoryTopics), null, 2);

export const importData = (json: string): { ok: true; data: RelocationStorageData } | { ok: false; error: string } => {
  try {
    const parsed = JSON.parse(json) as unknown;
    return validateData(parsed);
  } catch {
    return { ok: false, error: "Backup file is not valid JSON." };
  }
};

export const createSeedStorageData = seedData;
