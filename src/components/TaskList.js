import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask, category}) {
  const filteredTask = tasks.filter((task)=>{
    if(category==="All"){
      return true
    }
    return task.category === category
  })
  const tasksComponent = filteredTask.map((task)=>{
    return <Task key={task.text} task={task} deleteTask={deleteTask}/>
  })


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksComponent}
    </div>
  );
}

export default TaskList;
