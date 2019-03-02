import React from "react";

const CategoryButton = ({ id, imgUrl, color, handleCategory }) => {
  return (
    <span>
      <img
        className={`w-40 pa0 ma2 ba br3 bg-near-white b--${color} pointer shadow-5 bw2 grow o-50`}
        src={imgUrl}
        alt="category"
        id={id}
        onClick={handleCategory}
      />
    </span>
  );
};

export default CategoryButton;
