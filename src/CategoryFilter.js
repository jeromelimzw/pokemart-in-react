import React from "react";
import CategoryButton from "./CategoryButton";
import categories from "./categoryInfo";

const CategoryFilter = () => {
  return (
    <div>
      <span className="ma0 f3">CATEGORIES</span>
      <hr className="w-40 ma1 mb3 center" />
      {categories.map(a => {
        return (
          <CategoryButton name={a.name} imgUrl={a.imgUrl} color={a.color} />
        );
      })}{" "}
    </div>
  );
};

export default CategoryFilter;
