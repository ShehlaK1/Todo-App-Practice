import './App.css'
import AddTodo from './components/AddTodo'
import AllTodos from './components/AllTodos'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
     <h1 className="text-4xl font-bold text-gray-800 mb-6">Todo App</h1>
     <Navbar />
     <div className="w-full max-w-lg">
        <AddTodo />
        <AllTodos /> 
     </div>
    </div>
  )
}

export default App
