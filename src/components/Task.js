import React from "react";


function Task({task, handleDelete}) {
  console.log(task)

  function handleDelete(){
    
  }

  return (
    <div id="task" className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => handleDelete(task.text)} className="delete">X</button>
    </div>
  );
}

export default Task;
