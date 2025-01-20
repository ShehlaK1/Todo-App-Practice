import { useTodos } from "../context/useTodos";
import "../index.css";
import { useSearchParams } from "react-router-dom";
const AllTodos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  console.log("todos: ", todosData);

  let filteredData = todos;
  if (todosData === "active") {
    filteredData = filteredData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filteredData = filteredData.filter((task) => task.completed);
  }
  return (
    <div>
      <ul className="space-y-2">
        {filteredData.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => toggleTodoAsCompleted(todo.id)}
                  className="w-5 h-5"
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`${todo.completed ? "line-through" : ""}`}
                >
                  {todo.task}
                </label>
              </div>
              {todo.completed && (
                <button
                  type="button"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTodos;
