import type { TaskListProps } from '../../types/index';
import { TaskItem } from './TaskItem';


function TaskList({tasks, onStatusChange, onDelete, onSortChange, searchQuery, onSearchChange}:TaskListProps ){
  return (
    <div className="task-list">
      <div className="task-list__controls">
        {/* <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          
        /> */}
        
        <select onChange={(e) => onSortChange(e.target.value)} className='flex justify-end border mb-1'>
          <option value="">Sort By</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>

     <div>
       {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))
        )}
        </div>
    
    </div>
  );
};
export default TaskList;