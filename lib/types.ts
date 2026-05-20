export type TaskStatus = "available" | "in_progress" | "completed";

export type ViewMode = "timeline" | "focus" | "tasks" | "archive";

export type RelocationTask = {
  id: string;
  title: string;
  note?: string;
  deadline: string;
  status: TaskStatus;
  dependsOn?: string[];
  createdAt?: string;
};

export type Phase = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  tasks: RelocationTask[];
};
