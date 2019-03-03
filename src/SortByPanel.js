import React from "react";
import sortOptions from "./static/sortingInfo";

const SortByPanel = ({ handleSortBy }) => {
  return (
    <div className="mt4">
      <span className="ma0 f3">SORT</span>
      <hr className="w-20 ma1 mb3 center" />
      <div className=" tl f4 flex flex-column">
        {sortOptions.map(a => (
          <button
            className="br3 ba bg-blue white ph3 pv2 w-90 center hover-bg-navy pointer b--transparent grow mb2 shadow-5 o-50 tl"
            key={a._id}
            onClick={handleSortBy}
            value={a.value}
          >
            <i className="fas fa-bars mr3" />
            {a.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortByPanel;
