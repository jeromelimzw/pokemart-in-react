import React from "react";

const CategoryButton = ({ id, imgUrl, color, handleCategory, name }) => {
  return (
    <div
      onClick={handleCategory}
      className={` w-20 bb bw2 bg-moon-gray b--${color} bw2 flex pointer`}
    >
      <img
        src={imgUrl}
        alt="category"
        id={id}
        width="40"
        height="40"
        className="ph3 grow-large"
      />
      <div className="f4 dark-gray fw7 self-center ttl">{name}</div>
    </div>
  );
};

export default CategoryButton;
