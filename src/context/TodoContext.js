import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo Msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo=()=>
{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider