import React, { useState } from 'react';
import { Todo } from './todo';
import { TodoForm } from './todoform';
import { v4 as uuidv4 } from 'uuid';
import styles from "@/styles/Home.module.css";
import { EditTodoForm } from './edittodoform';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, editing: false}]);
    };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) =>{
        setTodos(
            todos.map((todo) =>
                 todo.id === id ? { ...todo, editing: !todo.editing } : todo
            )
        )
    }

    const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, editing: !todo.editing } : todo
          )
        );
      };

    return (
        <div className={styles.todoWrapper}>
            <h1 className={styles.todoWrapperColour}>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => todo.editing === true ? <EditTodoForm 
            editTodo = {editTask} task = {todo}/> :  (
                <Todo
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
};
