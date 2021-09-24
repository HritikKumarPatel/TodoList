import React from 'react'
import { useState } from 'react';
export default function AddTodo({addToList}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or desciption is empty");
        }
        else
            addToList(title,desc);
        setTitle("");
        setDesc("");
    }
    
    return (
        <div className = "container">
            <h2 className="text-center mt-3">Add a todo</h2>
            <form className = "mb-5" onSubmit = {submit}>
            <div class="form-group">
                <label for="title" className="form-label float-left">Title</label>
                <input type="text" class="form-control" value = {title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
            </div>
            <div class="form-group">
                <label for="desc" className="form-label">Desciption</label>
                <input type="text" class="form-control" id="desc" value = {desc} onChange={(e)=>{setDesc(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter description"/>
            </div>
            <button type="submit" class="btn btn-primary btn-sm mt-2">Add Todo</button>
            </form>
        </div>
    )
}
