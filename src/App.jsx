import {useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'




function App() {
  const [todos, setTodos] = useState([])

 const addTodo=(todo)=>
 {
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }
 const deleteTodo=(id)=>
 {
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
 }

 const updateTodo=(id,todo)=>
 {
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
 }

 
 const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>
  prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
}



useEffect(()=>
  {
  const todos=JSON.parse(localStorage.getItem("todos"))
  if(todos&&todos.length>0)
  setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    
      <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}
      >
        <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg 
      px-4 py-3 text-white'>
        <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
          Manage Your Todos
        </h1>
       
        <div className='mb-4'>
          {
            <TodoForm/>
          }
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {todos.map((todo)=>(
            <div key={todo.id} className='w-full'>
         <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
        </div>
      </div>
    
      </TodoProvider>
    
  )
}

export default App


// //This useEffect runs only once when the component is mounted (because of the empty dependency array []). Its job is to load the saved todos from localStorage and initialize the todos state.

// localStorage.getItem("todos"):
// This retrieves the todos string (if it exists) stored in the browser's localStorage.
// If no data is saved, it will return null.
// JSON.parse():
// Converts the todos string (retrieved from localStorage) back into a JavaScript array.

// The localStorage.setItem method is used in JavaScript to store a key-value pair in the browser's localStorage.
