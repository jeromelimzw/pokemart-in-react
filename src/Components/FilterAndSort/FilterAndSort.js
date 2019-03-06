import React from "react";
import SortByPanel from "../SortByPanel/SortByPanel";
import SearchBar from "../SearchBar/SearchBar";

const FilterAndSort = ({ handleSearch, handleSortBy }) => {
  return (
    <div className="w-20 h-50 ">
      <SearchBar handleSearch={handleSearch} />
      <SortByPanel handleSortBy={handleSortBy} />
    </div>
  );
};

export default FilterAndSort;
