import type { Task } from "../types/index";
export const validateTask = (task: Partial<Task>) => {
  const errors: Record<string, string> = {};
  if (!task.title) {
    errors.title = "Title is required.";
   } else if (task.title.length < 3){
    errors.title = "Title must be at least 3 characters.";}

  if (!task.description) {errors.description = "Description is required";
  }else if (task.description.length < 5){
    errors.description = "Please provide clear description";
  }
    
  if (!task.dueDate) {
    errors.dueDate = 'Due date is required.';
  } else {
    const due = new Date(task.dueDate).getTime();
    const now = Date.now();

    if (isNaN(due)) {
      errors.dueDate = 'Invalid date format.';
    } else if (due < now) {
      errors.dueDate = 'Due date cannot be in the past. Please select a future date.';
    }
  }
  return errors;
};
