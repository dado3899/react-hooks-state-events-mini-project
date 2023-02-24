import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit,categoryList}) {
  const [details, setdetails] = useState("")
  const [category,setcategory] = useState("Code")
  console.log(categoryList)
  const filtered = categoryList.filter((category)=> category!=="All")
  const buttonOptions = filtered.map((category)=>{
    return <option key={category} value={category}>{category}</option>
  })

  function handleSubmit(e){
    e.preventDefault()
    const newtask = {
      text: details,
      category: category,
    }
    onTaskFormSubmit(newtask)
    setdetails("")
    setcategory("Code")
  }

  // console.log(details)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e)=>setdetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setcategory(e.target.value)}>
          {buttonOptions}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
