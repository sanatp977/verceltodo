import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            editTodo(value, task.id);e
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={styles.todoInput}
                    placeholder='Update your task'
                />
                <button type="submit" className={styles.todoBtn}>Update</button>
            </div>
        </form>
    );
};
