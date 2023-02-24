import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [details,setdetails] =useState("")
  const [categorySelected, setcategorySelected] =useState("Code")
  const noAll = categories.filter((category)=>{
    if (category==="All"){
      return false
    }
    return true
  })
  
  const selectElement = noAll.map((category)=>{
    return <option key={category} value={category}>{category}</option>
  })

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text: details,
      category: categorySelected,
    }
    onTaskFormSubmit(newTask)
  }
  // console.log(details)
  // console.log(categorySelected)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>setdetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setcategorySelected(e.target.value)}>
          {selectElement}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
