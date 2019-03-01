import React from "react";
import CategoryFilter from "./CategoryFilter";

const FilterPanel = () => {
  return (
    <div className="w-20 bg-white pt3 tc br3 shadow-5">
      <CategoryFilter />
      <span className="ma0 f3">SORT</span>
      <hr className="w-20 ma1 mb3 center" />
    </div>
  );
};

export default FilterPanel;
