import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = (e) => {
        addTodo(value, description);
        // console.log(description)
        setValue('')
        setDescription('')
        e.preventDefault();
    }
    return (
        <form className='' onSubmit={handleSubmit}>
            <input onChange={(e) => setValue(e.target.value)} value={value} className='todo-input input' type="text"  placeholder='Name'/> <br />
            <input onChange={(e) => setDescription(e.target.value)} value={description} className='todo-input input mt-1' type="text" placeholder='code' /> <br />


            <div className="d-grid mt-2">
                <button type='submit' className='updateButton'> Add Task</button>

            </div>
        </form>
    )
}

export default TodoForm