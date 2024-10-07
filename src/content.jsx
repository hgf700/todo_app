import React, { useState } from "react";
import './App.css';

function MiddleContent() {
    const [tasks, setTasks] = useState(["eat", "eat"]);
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

    return (
        <div className="container-app">
            <header className="header"/>
            

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
  {tasks.map((task, index) =>
    <li key={index} className="todo">
      <label className="custom-checkbox-container">
        <input type="checkbox" id={`task-${index}`} />
        <span className="custom-checkbox"></span>
        <span className="todo-text">{task}</span>
      </label>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        <svg
          fill="var(--secondary-color)"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </li>
  )}
</ol>


            </div>

        </div>
    );
}

export default MiddleContent;
