
// export const sortTasks = (tasks: any[], sortBy: string) => {
//   switch (sortBy) {
//     case 'priority':
//       const priorityOrder = { high: 3, medium: 2, low: 1 };
//       return [...tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
//     case 'dueDate':
//       return [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
//     default:
//       return tasks;
//   }
// };

import type { Task } from "../types";


export const sortTasks = (tasks:Task[], sortBy:string): Task[] => {
  switch (sortBy) {
    case 'priority':
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return [...tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    case 'dueDate':
      return [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    default:
      return tasks;
  }
};
