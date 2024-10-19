import React, { useState } from "react";
import './todomain.css';

function MiddleContent({ sidebarOpen }) {
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if (newtask.trim() !== "") {
            setTasks(t => [...t, newtask]); 
            setNewTask(""); 
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((task, i) => i !== index)); 
    }

    function moveTaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskdown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={sidebarOpen ? 'middle-content reduced-width' : 'middle-content'}>
            <div className="header">
                <h1>Todo App</h1>
            </div>
            <div className="container-app">
                <div className="content">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            id="todo-input"
                            type="text"
                            value={newtask}
                            placeholder="Write anything planned to do"
                            onChange={handleInputChange}
                        />
                        <button id="add-button" type="button" onClick={handleAddTask}>
                            ADD
                        </button>
                    </form>

                    <ol>
                        {tasks.map((task, index) => (
                            <li key={index} className="todo">
                                <label className="custom-checkbox-container">
                                    <input type="checkbox" id={`task-${index}`} />
                                    <span className="custom-checkbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--primary-color)">
                                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                        </svg>
                                    </span>
                                    <span className="todo-text">{task}</span>
                                </label>
                                <div className="button-container">
                                    <button className="move-button" onClick={() => moveTaskup(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                                            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
                                        </svg>
                                    </button>
                                    <button className="move-button" onClick={() => moveTaskdown(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                                            <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
                                        </svg>
                                    </button>
                                    <button className="delete-button" onClick={() => deleteTask(index)}>
                                        <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default MiddleContent;
