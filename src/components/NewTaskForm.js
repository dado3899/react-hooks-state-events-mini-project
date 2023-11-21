import React from "react";

function NewTaskForm({categories, addTask}) {
  function submit(e){
    e.preventDefault()
    const newTask = {
      text: e.target.text.value,
      category: e.target.category.value
    }
    addTask(newTask)
  }
  
  return (
    <form className="new-task-form" onSubmit={(e)=>submit(e)}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category)=>
          <option key={category} value={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
