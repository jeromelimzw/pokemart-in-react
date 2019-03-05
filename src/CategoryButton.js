import React from "react";

const CategoryButton = ({ id, imgUrl, color, handleCategory, name }) => {
  return (
    <div
      onClick={handleCategory}
      className={` w-20 bb bw2 bg-moon-gray dark-gray hover-bg-near-white b--${color} bw2 flex pointer ph2 shadow-5
      `}
      id={id}
    >
      <img
        src={imgUrl}
        alt="category"
        id={id}
        width="40"
        height="40"
        className={`grow-large pl0`}
      />
      <div className="f4 fw6 self-center ttl ph0" id={id}>
        {name}
      </div>
    </div>
  );
};

export default CategoryButton;
