import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryFilter = ({ categories, handleCategory }) => {
  return (
    <div className="flex center mb4">
      {categories.map(a => {
        return (
          <CategoryButton
            id={a._id}
            key={a._id}
            imgUrl={a.imgUrl}
            color={a.color}
            handleCategory={handleCategory}
            name={a.name}
          />
        );
      })}
    </div>
  );
};

export default CategoryFilter;
