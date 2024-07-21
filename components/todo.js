import React, { useState } from 'react';
import { FaRegCircle, FaCircle } from "react-icons/fa";
import Confetti from 'react-confetti';
import { useWindowSize } from './useWindowSize';
import styles from "@/styles/Home.module.css";

export const Todo = ({ task, deleteTodo, toggleComplete }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    const handleToggleComplete = (taskId) => {
        toggleComplete(taskId);
        setShowConfetti(true);

        setTimeout(() => {
            setShowConfetti(false);
        }, 3000);
    };

    return (
        <div className={styles.todo}>
            <p
                className={`${task.completed ? styles.completed : styles.incompleted}`}
                onClick={() => handleToggleComplete(task.id)}
            >
                {task.task}
            </p>
            <div className={styles.actions}>
                <FaCircle
                    className={`${task.completed ? styles.completedIcon : styles.uncompletedIcon}`}
                    onClick={() => handleToggleComplete(task.id)}
                />
                <span className={styles.deleteIcon} onClick={() => deleteTodo(task.id)}>Delete</span>
            </div>
            {task.completed && showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    drawShape={(ctx) => {
                        ctx.beginPath();
                        for (let i = 0; i < 22; i++) {
                            const angle = 0.35 * i;
                            const x = (0.2 + (1.5 * angle)) * Math.cos(angle);
                            const y = (0.2 + (1.5 * angle)) * Math.sin(angle);
                            ctx.lineTo(x, y);
                        }
                        ctx.stroke();
                        ctx.closePath();
                    }}
                />
            )}
        </div>
    );
};
