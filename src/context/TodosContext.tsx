import { useState } from "react";
import { TodosContext } from "./TodosContextSetup";
import { Todo, TodosProviderProps } from "./TodosTypes";

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    if (!task.trim()) {
      console.log("Task is empty. Todo not added.");
      return;
    }
    setTodos((prev) => {
      const taskExists = prev.some(
        (todo) => todo.task.toLowerCase() === task.trim().toLowerCase()
      );
      if (taskExists) {
        console.log("Task already exists. Todo not added.");
        return prev;
      }
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
