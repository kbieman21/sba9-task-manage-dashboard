export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'pending' | 'in-progress' | 'complete';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  createdAt?: string;
}


export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: string, newStatus: Task['status']) => void;
  onDelete: (id: string) => void;
  onSortChange: (sortBy: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  //sortBy?: string
}

export interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  initialValues?: Partial<Task>;
}

export interface TaskFilterProps {
  filterStatus: TaskStatus | '';
  filterPriority: TaskPriority | '';
  onStatusFilterChange?: (status: TaskStatus | '') => void;
  onPriorityFilterChange?: (priority: TaskPriority | '') => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export interface TaskItemProps{
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

