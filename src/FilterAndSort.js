import React from "react";
import CategoryFilter from "./CategoryFilter";
import SortByPanel from "./SortByPanel";

const FilterAndSort = ({ categories }) => {
  return (
    <div className="w-20 h-50 bg-white pv3 tc br3 shadow-5">
      <CategoryFilter categories={categories} />
      <SortByPanel />
    </div>
  );
};

export default FilterAndSort;
