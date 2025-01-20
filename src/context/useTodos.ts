import { useContext } from 'react';
import { TodosContext } from './TodosContextSetup';

export const useTodos = () => {
    const todosConsumer = useContext(TodosContext);
    if (!todosConsumer) {
        throw new Error('useTodos must be used within a TodosProvider');
    }
    return todosConsumer;
};