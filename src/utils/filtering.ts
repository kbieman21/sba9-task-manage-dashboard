// import type { Task } from "../types/index";

// export const filterTasks = (tasks, { status, priority, search }) => {
//   return tasks.filter(task => {
//     const matchStatus = !status || task.status === status;
//     const matchPriority = !priority || task.priority === priority;
//     const matchSearch = !search || task.title.toLowerCase().includes(search.toLowerCase());
//     return matchStatus && matchPriority && matchSearch;
//   });
// };

export const filterTasks = (tasks: any[], { status, priority, search }: { status: string; priority: string; search: string; }) => {
  return tasks.filter((task: { status: any; priority: any; title: string; }) => {
    const matchStatus = !status || task.status === status;
    const matchPriority = !priority || task.priority === priority;
    const matchSearch = !search || task.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchPriority && matchSearch;
  });
};


