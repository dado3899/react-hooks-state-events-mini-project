import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete,currentcategory}) {
  let key = 0
  const filteredTask = tasks.filter((task)=>{
    if(task.category === currentcategory || currentcategory==="All"){
      return true
    }
    return false
  })
  const taskList = filteredTask.map((task)=>{
    key+=1
    return <Task key={key} task={task} handleDelete={handleDelete}/>
  })
  console.log(taskList)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
