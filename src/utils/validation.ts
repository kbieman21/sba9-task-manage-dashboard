export const validateTask = (task) => {
  const errors: Record<string, string> = {};
  if (!task.title) errors.title = "Title is required.";
  if (task.title && task.title.length < 3) errors.title = "Title must be at least 3 characters.";
  return errors;
};

