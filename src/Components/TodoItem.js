import React from 'react'



export default function TodoItem({todo, onDelete}) {
    return (
        <div className="my-5">
            <h4>{todo.title}</h4>
            <p>{todo.desp}</p>
            <button type="button" className="btn btn-danger btn-sm" onClick = {()=>onDelete(todo)}>Delete</button>
        </div>
    )
}
