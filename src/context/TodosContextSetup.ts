import { createContext } from 'react';
import { TodosContext as TodosContextType } from './TodosTypes';

export const TodosContext = createContext<TodosContextType | null>(null);