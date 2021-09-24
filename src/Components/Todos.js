import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
export default function Todos({todos, onDelete, addToList}) {
    return (
        <>
        <div className="container mb-5">
            
            <AddTodo addToList = {addToList}/>
            <h3 className="text-center">Todos List</h3>
            {todos.length!==0?todos.map((todo)=>{
                    return <TodoItem todo = {todo} key = {todo.sno} onDelete = {onDelete}/>
            }):"List is empty"
            }
            
        </div>
        </>
    )
}
