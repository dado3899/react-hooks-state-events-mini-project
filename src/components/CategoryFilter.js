import React from "react";

function CategoryFilter({categories,currentcategory,setcurrentcategory}) {
  // console.log(categories)
  const categorieslist = categories.map((category)=>{
    const className = (currentcategory===category)? "selected" : ""
    return <button key={category} className={className} onClick={()=>setcurrentcategory(category)}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categorieslist}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
