import React ,{useState} from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm()
{
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()//accessing functionality from context

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo ({todo,completed:false})
        setTodo("")//reset todo state to empty string after submission
    }

    return (
        <form onSubmit={add} className="flex">
            <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm




// Flow of setTodo
// When the user types into the input field:

// The onChange handler updates the todo state with the latest value.
// This ensures the input field reflects the current state.
// When the form is submitted:

// The add function is called, which:
// Adds the current todo value to the list of todos using addTodo.
// Resets the todo state to an empty string using setTodo("").
// After resetting:

// The input field is cleared because its value is tied to the todo state, which is now an empty string.