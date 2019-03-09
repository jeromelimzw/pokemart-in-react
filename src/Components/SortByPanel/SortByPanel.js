import React from "react";
import { getSortOptions } from "../../static/sortingInfo";

const SortByPanel = ({ handleSortBy }) => {
  return (
    <div className=" bg-white pb3 tc shadow-5">
      <div className="w-100 bg-gray white f3 pv1 pl3 tl fw3 mb3">sort</div>
      <div className=" tl f6 flex flex-column">
        {getSortOptions().map(a => (
          <button
            className="ba bg-blue white ph3 pv2 w-90 center hover-bg-navy pointer b--transparent grow mb2 shadow-5 tl"
            key={a._id}
            onClick={handleSortBy}
            value={a.value}
            placeholder={a.name}
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
