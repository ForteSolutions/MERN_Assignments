import React, { useState } from 'react';

const Form = (props)=>{

    const [todoText, setTodoText] = useState("");

    const {todoList, setTodoList} = props;

const submitHandler = (e) =>{
    e.preventDefault();

    setTodoList([...todoList, {
        content: todoText,
        markedDelete: false,
        id: Math.floor(Math.random() * 100000000)
    }])

    setTodoText("");
}

    return(
        <div className="my-3">
            <form onSubmit={submitHandler}>
                <h3>To-Do List</h3>
                <input value={todoText} onChange={(e)=>setTodoText(e.target.value)} type="text"/>
                <button class="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default Form;