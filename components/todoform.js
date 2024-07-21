import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
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
                    placeholder='What is the task today?'
                />
                <button type="submit" className={styles.todoBtn}>+</button>
            </div>
        </form>
    );
};
