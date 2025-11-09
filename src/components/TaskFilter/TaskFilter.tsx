
import type { TaskPriority, TaskStatus, TaskFilterProps } from '../../types/index';


function TaskFilter({filterStatus, filterPriority, onStatusFilterChange, onPriorityFilterChange, searchQuery, onSearchChange}:TaskFilterProps){
    return(
       <div className="task-filter">
    
      
      <div className="my-4 rounded-lg p-5 flex gap-10">
      <select value={filterStatus} onChange={(e) => onStatusFilterChange(e.target.value as TaskStatus | '')}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="complete">Complete</option>
      </select>

      <select value={filterPriority} onChange={(e) => onPriorityFilterChange(e.target.value as TaskPriority | '')}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

        <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className='flex justify-end border'
      />
      </div>
    </div>
    )
}
export default TaskFilter;