import { ReactNode } from 'react';

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

export type TodosProviderProps = {
    children: ReactNode;
};

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
};