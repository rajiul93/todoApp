import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoFrom';
import Todo from './Todo';
import TodoForm from './TodoForm';
uuidv4()

function TodoWrapper() {
    const store = JSON.parse(localStorage.getItem("first"));
    let cart = [];
    if (store) {
        cart = store;
    }

    const [todos, setTodos] = useState(cart);
    const addTodo = (todo, description) => {
        if (todo) {
            setTodos([{ id: uuidv4(), task: todo, complete: false, isEditing: false, description: description, finish: false }, ...todos]);
        };
    }
    // toggleComplete use for class controlling 
    // const toggleComplete = id => {
    //     setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: true } : todo))
    // }
    // single item delete
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    // editTodo use for edit from open
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    // editTask use for previous content update
    const editTask = (task, id, description) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, description, isEditing: !todo.isEditing } : todo))
    }





    const second = JSON.parse(localStorage.getItem("second"));
    let secondStore = []
    if (second) {
        secondStore = second;
    }
    const [secondTask, setSecondTask] = useState(secondStore)
    const toggleComplete = (id) => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.complete = true
                setSecondTask([todo, ...secondTask ])
            }
            return todo
        })
        setTodos(newTodo);
        localStorage.setItem("second", JSON.stringify(secondTask));
        deleteTodo(id)
    }

    useEffect(() => {
        localStorage.setItem("first", JSON.stringify(todos))
        localStorage.setItem("second", JSON.stringify(secondTask))
    }, [todos])

    return (
        <div className=''>
            <h3 className='text-center'>Today Target <i className="bi bi-bullseye"></i></h3>
            <TodoForm addTodo={addTodo} />

            <div className="todo-area">
                {todos.map((todo, index) => {
                    return <div className="" key={index}>
                            <Todo onTask={todo} onToggleComplete={toggleComplete} onDelete={deleteTodo} onEditTodo={editTodo} key={index} />

                        {todo.isEditing ? (<EditTodoForm onEditTodo={editTask} onTask={todo} />) : ""}
                    </div>
                })}
            </div>

        </div>
    )
}

export default TodoWrapper;

