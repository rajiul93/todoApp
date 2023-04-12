import React, { useEffect, useState } from 'react';
import "./RunningTodo.css";

export default function RunningTodo({ onRunning }) {
    const store = JSON.parse(localStorage.getItem("second"));
    let cart = [];
    if (store) {
        cart = store;
    }
    const running = cart.filter(task => task.complete === true && task.finish === false);
    const [todos, setTodos] = useState(running);


// control finish button start
    const three = JSON.parse(localStorage.getItem("three"));
    let threeStore = []
    if (three) {
        threeStore = three;
    }
    const [finalTask, setFinalTask] = useState(threeStore)


    const finish = (id) => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.finish = true
                setFinalTask([...finalTask, todo])

            }
            return todo
        })
        setTodos(newTodo.filter(todo=>todo.finish !== true));
        localStorage.setItem("second", JSON.stringify(newTodo));
    }

// control finish button end
const date1 = new Date;
console.log(date1);

    useEffect(() => {
        localStorage.setItem("three", JSON.stringify(finalTask))
    }, [todos]);
    return (
        <div className="container  mt-5">
            <h6 className='fs-4 text-center text-light mb-4'>Running Task</h6>
            <div className='runningTodo-container'>
                {
                    todos.map((task, ind) => {
                        return <div key={ind} className='running_child'>
                            <div><p>Titlee:{task.task} </p></div>
                            <div><p>Des:{task.description}</p></div>
                            <div className={task.finish ? "text-danger" : "text-dark"} onClick={() => finish(task.id)}><i role='button' title='finish confirm' className=" bi bi-building-check finish"></i></div>
                        </div>
                    })
                }






            </div>
        </div>
    )
}
