import React, { useState } from 'react';
import type { Task, TaskPriority, TaskStatus } from '../../types/index';
import { validateTask } from '../../utils/validation';
import type {TaskFormProps} from '../../types/index'


function TaskForm({ onSubmit, initialValues = {} }:TaskFormProps) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [priority, setPriority] = useState<TaskPriority>(initialValues.priority || 'medium');
  const [status, setStatus] = useState<TaskStatus>(initialValues.status || 'pending');
  const [dueDate, setDueDate] = useState(initialValues.dueDate || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { title, description, priority, status, dueDate };
    const validationErrors = validateTask(newTask);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(newTask);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('pending');
    setDueDate('');
  };

  return (
    <form className="task-form space-y-5" onSubmit={handleSubmit}>
      {/* <h3>{initialValues?.id ? 'Edit Task' : 'Add New Task'}</h3> */}
       <h1 className="text-2xl font-bold mb-1 mt-8 text-center text-teal-400">Add New Task</h1>

      <div>
        <label htmlFor="" className="block text-sm font-medium mb-1">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)}  className="w-full p-2.5 border border-gray-700 rounded-md bg-white-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"/>
        {errors.title && <p className="error text-sm text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="" className="block text-sm font-medium mb-1">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}  className="w-full p-2.5 border border-gray-700 rounded-md bg-white-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"/>
        {errors.description && <p className="error text-sm text-red-500">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="" className="block text-sm font-medium mb-1">Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}  className="w-full p-2.5 border border-gray-700 rounded-md bg-white-800 focus:ring-2 focus:ring-teal-400 focus:outline-none">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="" className="block text-sm font-medium mb-1">Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)} className="w-full p-2.5 border border-gray-700 rounded-md bg-white-800 focus:ring-2 focus:ring-teal-400 focus:outline-none">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
      </div>

      <div>
        <label htmlFor="" className="block text-sm font-medium mb-1">Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}  className="w-full p-2.5 border border-gray-700 rounded-md bg-white-800 focus:ring-2 focus:ring-teal-400 focus:outline-none"/>
         {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
      </div>

       <button type="submit" className="w-full mb-10 py-2.5 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-all duration-200">Add Task</button>
    </form>
  );
};

export default TaskForm;