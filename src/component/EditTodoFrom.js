import React, { useState } from 'react';

function EditTodoForm({ onEditTodo, onTask }) {

    const [value, setValue] = useState(onTask.task)
    const [description, setDescription] = useState(onTask.description)

    const handleSubmit = (e) => {
        onEditTodo(value, onTask.id, description);
        setValue('')
        e.preventDefault();
    }

    return (
        <div className='todo-form'>
            <form className=' mx-auto' onSubmit={handleSubmit}>
                <div className='form-div'>
                    <input onChange={(e) => setValue(e.target.value)} value={value} className='mb-2 input' type="text" placeholder='update task' />
                    <input onChange={(e) => setDescription(e.target.value)} value={description} className='mb-2 input' type="text" placeholder='location task' />
                    <button type='submit' className='updateButton '> Update!</button>
                </div>
            </form>
        </div>

    )
}

export default EditTodoForm;