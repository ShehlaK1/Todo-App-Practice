import { FormEvent, useState } from 'react'
import { useTodos } from '../store/todos';

const AddTodo = () => {
    const [todo, setTodo] = useState<string>("");
    const {handleAddTodo} = useTodos();


    const handleFormSubmit = (e:FormEvent<HTMLElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }

  return (
    <>
    <form onSubmit={handleFormSubmit } className="flex items-center gap-2 mb-4">
        <input type="text" value={todo}
            onChange={(e) => setTodo(e.target.value)} 
            className="border border-gray-300 rounded px-4 py-2 flex-1"
            placeholder="Add a new task" />
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Add</button>
    </form>
    </>
  )
}

export default AddTodo