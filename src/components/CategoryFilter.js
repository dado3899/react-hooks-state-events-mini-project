import React from "react";

function CategoryFilter({categories,currentCategory,setcurrentCategory}) {
  const categorybuttons = categories.map((category)=>{
    const className = (currentCategory===category)? "selected" : null
    return <button key={category} className={className} onClick={()=>setcurrentCategory(category)}>{category}</button>
  })

  //console.log(categorybuttons)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categorybuttons}
    </div>
  );
}

export default CategoryFilter;
