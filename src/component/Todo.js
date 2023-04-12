import React from 'react';

function Todo({ onTask, onToggleComplete, onDelete, onEditTodo }) {
    const title = "are you confirm!"
    return (
        
            <div  className='d-flex justify-content-between align-items-start bg-color mt-2   px-2 ' >

                <div  className='todo-content'>
                    <h6 className={onTask.complete ? "complete m-0" : "unComplete m-0 mt-1 "} role='button' >{onTask.task.toUpperCase()}</h6>
                    <p className={onTask.complete ? "complete m-0" : "unComplete m-0 mt-1"} role='button' >{onTask.description}</p> 
                  
                </div>

                <div className='d-flex gap-2 mt-2'>
                    <p onClick={() => onToggleComplete(onTask.id)} role='button'><i title={title} className="bi bi-skip-start-btn-fill"></i></p>
                    <p onClick={() => onEditTodo(onTask.id)} role='button'><i className="bi bi-pencil-square"></i></p>
                    <p onClick={() => onDelete(onTask.id)} role='button'><i className="bi bi-trash3 delete"></i></p>
                </div>
            </div>
        
    )
}

export default Todo;