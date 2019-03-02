import React from "react";
import CategoryButton from "./CategoryButton";

const CategoryFilter = ({ categories, handleCategory }) => {
  return (
    <div>
      <span className="ma0 f3">CATEGORIES</span>
      <hr className="w-40 ma1 mb3 center" />
      {categories.map(a => {
        return (
          <CategoryButton
            id={a._id}
            key={a._id}
            imgUrl={a.imgUrl}
            color={a.color}
            handleCategory={handleCategory}
          />
        );
      })}{" "}
    </div>
  );
};

export default CategoryFilter;
