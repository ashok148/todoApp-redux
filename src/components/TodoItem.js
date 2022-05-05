import React, { useState } from 'react'
import "./TodoItem.css";
const TodoItem = ({createTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
    };
    return (
        <form className='TodoInput' onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a todo.."
                id="task"
                name="task"
                value={task}
                onChange ={(e) => setTask(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
};

export default TodoItem;