import { createContext, ReactNode, useContext, useState } from 'react';

export type TodosProviderProps = {
    children : ReactNode 
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}
export type TodosContext = {
    todos : Todo[]
    handleAddTodo: (task: string) => void
    toggleTodoAsCompleted: (id: string) => void
    handleDeleteTodo: (id: string) => void

}

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAddTodo = (task: string) => {
        if (!task.trim()) {
            console.log("Task is empty. Todo not added.");
            return;
          }
        setTodos((prev) => {
            const taskExists = prev.some((todo) => todo.task.toLowerCase() === task.trim().toLowerCase());
            if (taskExists) {
            console.log("Task already exists. Todo not added.");
            return prev; 
            }
            const newTodos:Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()

                },
                ...prev
            ]
            console.log("prev", prev);
            console.log(newTodos);
            return newTodos
        })
    }

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((filterTodo) => filterTodo.id !== id)
            return newTodos
        })
    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed : !todo.completed}
                }
                return todo;
            })
            return newTodos
        })
    }

    return <TodosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted,
        handleDeleteTodo}}>
    {children}
    </TodosContext.Provider>
}

export const useTodos = () => {
    const todosConsumer = useContext(TodosContext);
    if(!todosConsumer) {
        throw new Error("Placed outside of Provider");
    }
    return todosConsumer;

}