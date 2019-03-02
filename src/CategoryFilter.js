import React from "react";
import CategoryButton from "./CategoryButton";

const CategoryFilter = ({ categories }) => {
  return (
    <div>
      <span className="ma0 f3">CATEGORIES</span>
      <hr className="w-40 ma1 mb3 center" />
      {categories.map(a => {
        return (
          <CategoryButton
            key={a._id}
            name={a.name}
            imgUrl={a.imgUrl}
            color={a.color}
          />
        );
      })}{" "}
    </div>
  );
};

export default CategoryFilter;
