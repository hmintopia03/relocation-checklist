export type TaskStatus = "available" | "in_progress" | "completed";

export type ViewMode = "timeline" | "categories" | "packing" | "tasks" | "archive";

export type RelocationTask = {
  id: string;
  title: string;
  note?: string;
  deadline: string;
  status: TaskStatus;
  dependsOn?: string[];
  createdAt?: string;
  order?: number;
};

export type Phase = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  tasks: RelocationTask[];
};

export type InventoryStatus = "already_have" | "need_to_buy" | "bought" | "optional" | "important";

export type BuyLocation = "none" | "korea" | "germany";

export type InventoryPriority = "low" | "medium" | "high";

export type InventoryCategory = {
  id: string;
  name: string;
};

export type PackingContainer = {
  id: string;
  name: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  categoryId: string;
  topic?: string;
  quantity: string;
  status: InventoryStatus;
  buyLocation: BuyLocation;
  priority: InventoryPriority;
  notes?: string;
  containerId?: string;
  packed?: boolean;
  packingOrder?: number;
};
