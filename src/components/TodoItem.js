import React, { useState } from 'react'

const TodoItem = () => {
    const [task, setTask] = useState("");

    const handleSubmit = () => {

    }
    return (
        <form className='todoInput' onSubmit={handleSubmit}>
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