// src/components/TaskList/TaskItem.tsx
import React from 'react';
import type { Task } from '../../types/index';
import type {TaskItemProps} from '../../types/index'


// Optional styles for priority colors
const priorityStyles: Record<Task['priority'], string> = {
  low: 'text-green-600 font-medium',
  medium: 'text-yellow-600 font-medium',
  high: 'text-red-600 font-medium',
};

 const statusStyles = {
    pending: "text-yellow-500",
    "in-progress": "text-red-500",
    complete: "text-green-500",
  };

export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className="bg-gray shadow-md rounded-lg p-4 mb-5 flex items-start justify-between border">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold items-start ">{task.title}</h1>
        <div>{task.description}</div>

        <div>
            Status:{''}
            <span className={statusStyles[task.status]}> {task.status}</span>
        </div>

        <div>
          Priority:{' '}
          <span className={priorityStyles[task.priority]}>{task.priority}</span>
        </div>

        {task.dueDate && <div>Due Date: {task.dueDate}</div>}
      </div>

        <div>
          Status:{''}
          <select
            value= {task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
            className="border rounded px-2 py-1 ml-1"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      <button
        className='p-2 bg-red-300 rounded hover:cursor-pointer'
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
