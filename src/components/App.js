import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, settaskList] = useState(TASKS)
  const [currentCategory,setcurrentCategory] = useState("All")
  function handleDelete(tasktodelete){
  const newtaskList = taskList.filter((task) => {
      //If task name is equal to task of button return false, otherwise return true
      if(task.text === tasktodelete.text){
        return false
      }
      return true
    })
    settaskList(newtaskList)
  }
  function addtask(newtask){
    const newtasklist = [...taskList,newtask]
    settaskList(newtasklist)
  }
  console.log(CATEGORIES)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory={currentCategory} setcurrentCategory={setcurrentCategory}/>
      <NewTaskForm onTaskFormSubmit={addtask} categoryList={CATEGORIES}/>
      <TaskList taskList = {taskList} handleDelete = {handleDelete} currentCategory={currentCategory}/>
    </div>
  );
}

export default App;
