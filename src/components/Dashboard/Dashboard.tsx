import{ useState } from "react";
import type { Task, TaskPriority, TaskStatus } from "../../types/index";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import { filterTasks } from "../../utils/filtering";
import { sortTasks } from "../../utils/sorting";

function Dashboard() {
  const [filterStatus, setFilterStatus] = useState<'' | TaskStatus>("");
  const [filterPriority, setFilterPriority] = useState<'' | TaskPriority>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can't log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "complete",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ]);

  const addTask = (taskData: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const changeStatus = (id: string, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const filtered = sortTasks(
    filterTasks(tasks, {
      status: filterStatus,
      priority: filterPriority,
      search: searchQuery,
    }),
    sortBy
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "complete").length;
  const pendingTasks = tasks.filter((t) => t.status === "pending").length;
  const inProgressTasks = tasks.filter(
    (t) => t.status === "in-progress"
  ).length;

//   const highPriortyTask = tasks.filter((t)=> t.priority === 'high')
//   const mediumPriortyTask = tasks.filter((t)=> t.priority === 'medium')
//   const lowPriortyTask = tasks.filter((t)=> t.priority === 'low')

//   const handleSortChange = (sortOption: string) => {
//     setSortBy(sortOption);
//   };

  return (
    <div className="dashboard">
      <h1 className="text-3xl font-bold text-center">Task Manager App</h1>

       <div className="flex justify-center my-3 text-center border">
        <p className="px-20 py-1 bg-green-500">
          {completedTasks}/{totalTasks} tasks completed
        </p>
        <p className="px-20 py-1 bg-yellow-500">
          {pendingTasks}/{totalTasks} tasks pending
        </p>
        <p className="px-20 py-1 bg-blue-500">
          {inProgressTasks}/{totalTasks} tasks in-progress
        </p>
      </div>

      <div className="flex justify-center my-3 text-center border">
                    
            <p className="px-20 py-1 bg-green-500">
              {tasks.filter((task) => task.priority === "low").length}/{totalTasks} low priority
            </p>      
          
           
            <p className="px-20 py-1 bg-yellow-500">
              {tasks.filter((task) => task.priority === "medium").length}/{totalTasks} medium priority
            </p>
                    
           
            <p className="px-20 py-1 bg-red-700">
              {tasks.filter((task) => task.priority === "high").length}/{totalTasks} high priority
            </p>
          
        </div>

      

      <TaskForm onSubmit={addTask} />

      <TaskFilter
        filterStatus={filterStatus}
        filterPriority={filterPriority}
        onStatusFilterChange={setFilterStatus}
        onPriorityFilterChange={setFilterPriority}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <TaskList
        tasks={filtered}
        onStatusChange={changeStatus}
        onDelete={deleteTask}
        onSortChange={setSortBy}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
};

export default Dashboard;
