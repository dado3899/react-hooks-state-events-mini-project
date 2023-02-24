import React from "react";

function Task({Task,handleDelete}) {
  // console.log(Task)
  return (
    <div className="task">
      <div className="label">{Task.category}</div>
      <div className="text">{Task.text}</div>
      <button className="delete" onClick={()=>handleDelete(Task)}>X</button>
    </div>
  );
}

export default Task;
