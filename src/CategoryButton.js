import React from "react";

const CategoryButton = ({ id, imgUrl, color, handleCategory, name }) => {
  return (
    <div
      onClick={handleCategory}
      className={` w-20 bb bw2 bg-moon-gray b--${color} bw2 flex pointer  ${
        name.length === 0 ? "pa0" : "ph2"
      }`}
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
      <div className="f4 dark-gray fw6 self-center ttl ph0">{name}</div>
    </div>
  );
};

export default CategoryButton;
