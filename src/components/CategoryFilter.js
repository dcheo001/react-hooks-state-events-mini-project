import React from "react";

function CategoryFilter({categories, handleClick}) {
  const handleClick = () => {

  }
  const renderButtons = () => {
    return categories.map((category) => {
      return <button onClick={handleClick}>{category}</button>
    })
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
