import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {setState} from "react"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  console.log(category)
  // settask = tasks where we remove index
  function deleteTask(tasktoDel){
    const newtasksArr = tasks.filter((task)=>{
      console.log(task)
      return task.text !== tasktoDel
    })
    setTasks(newtasksArr)
  }
  function addTask(newTask){
    setTasks([...tasks,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} selectedcategory={category}/>
      <NewTaskForm categories={CATEGORIES} addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} category={category}/>
    </div>
  );
}

export default App;
