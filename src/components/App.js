import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,settasks] = useState(TASKS)
  const [currentcategory,setcurrentcategory] = useState("All")

  function handleDelete(todelete){
    const filteredtask = tasks.filter((task)=>{
      if(task.text===todelete.text){
        return false
      }
      return true
    })
    // console.log(filteredtask)
    settasks(filteredtask)
  }

  function onTaskFormSubmit(newTask){
    const newTasksArray = [...tasks,newTask]
    settasks(newTasksArray)
  }
  // console.log(currentcategory)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentcategory={currentcategory} setcurrentcategory={setcurrentcategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleDelete={handleDelete} currentcategory={currentcategory}/>
    </div>
  );
}

export default App;
