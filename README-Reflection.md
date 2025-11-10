## Reflection Document

This project is intended as a learning tool to understand React components, state management, TypeScript integration, form handling, and component composition.

This project shows important featurs such as:
- Display a list of tasks with title, description, status, priority, and due date**
- Add new tasks using a controlled form
- Delete tasks
- Filter tasks by status** and priority**
- Sort tasks
- Search tasks


# How you implemented React and TypeScript features
Create vite project npm create vite@latest 
Install dependencies:
npm install
Run the development server: npm run dev
Open in browser:
Navigate to http://localhost:5173

# The challenges you encountered and how you overcame them
the biggest challenge was component communication. It was hard to figure out which part to puto in which component
# Your approach to component composition and state management
I followed modular, top-down compostion pattern. for the state management, I used a react's built-in useState hook to manage form inputs, sorting and filtering, and for local error handling and validation as well.