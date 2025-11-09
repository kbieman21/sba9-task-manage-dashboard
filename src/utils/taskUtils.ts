import type { TaskStatus } from "../types";

export function isTaskStatus(status: string): status is TaskStatus {
  return (
    status === "pending" || status === "in-progress" || status === "completed"
  );
}