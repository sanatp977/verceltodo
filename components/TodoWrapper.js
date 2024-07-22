import React, { useState } from 'react';
import { Todo } from './todo';
import { TodoForm } from './todoForm';
import { v4 as uuidv4 } from 'uuid';
import styles from "@/styles/Home.module.css";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
    };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className={styles.todoWrapper}>
            <h1 className={styles.todoWrapperColour}>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
};
