import React from "react";
import CategoryFilter from "./CategoryFilter";
import SortByPanel from "./SortByPanel";
import SearchBar from "./SearchBar";

const FilterAndSort = ({
  categories,
  handleSearch,
  handleCategory,
  handleSortBy
}) => {
  return (
    <div className="w-20 h-50 bg-white pv3 tc br3 shadow-5">
      <SearchBar handleSearch={handleSearch} />
      <CategoryFilter categories={categories} handleCategory={handleCategory} />
      <SortByPanel handleSortBy={handleSortBy} />
    </div>
  );
};

export default FilterAndSort;
