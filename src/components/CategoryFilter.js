import React from "react";

function CategoryFilter({categories, setCategory, selectedcategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{
        return(
        <button 
        key={category}
        className={category===selectedcategory?"selected":""} 
        onClick={()=>setCategory(category)}>
          {category}
        </button>
        )
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
