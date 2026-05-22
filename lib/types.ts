export type TaskStatus = "available" | "in_progress" | "completed";

export type ViewMode = "timeline" | "categories" | "packing" | "tasks" | "archive";

export type RelocationTask = {
  id: string;
  title: string;
  note?: string;
  deadline: string;
  status: TaskStatus;
  dependsOn?: string[];
  completedAt?: string;
  cost?: number;
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

export type InventoryTransportStatus = "bring" | "cannot_bring" | "buy_in_germany" | "leave_behind";

export type InventoryCategory = {
  id: string;
  name: string;
};

export type InventoryTopic = {
  id: string;
  categoryId: string;
  name: string;
  order?: number;
};

export type PackingContainer = {
  id: string;
  name: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  categoryId: string;
  topicId?: string;
  /** Legacy/import compatibility. New writes should prefer topicId. */
  topic?: string;
  quantity: string;
  status: InventoryStatus;
  buyLocation: BuyLocation;
  transportStatus?: InventoryTransportStatus;
  priority: InventoryPriority;
  notes?: string;
  containerId?: string;
  packed?: boolean;
  packingOrder?: number;
};
