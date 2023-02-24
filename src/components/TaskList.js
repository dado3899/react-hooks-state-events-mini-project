import React from "react";
import Task from "./Task"

function TaskList({taskList,handleDelete,currentCategory}) {
  let key = -1
  console.log(taskList)
  let taskDisplay = taskList.map(task => {
    if(task.category===currentCategory || currentCategory==="All"){
      key=key+1
      return <Task key={key} Task={task} handleDelete={handleDelete}/>
    }
    return null
  });
  //console.log(taskDisplay)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskDisplay}
    </div>
  );
}

export default TaskList;
