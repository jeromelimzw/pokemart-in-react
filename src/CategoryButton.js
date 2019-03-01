import React from "react";

const CategoryButton = ({ name, imgUrl, color }) => {
  return (
    <span>
      <img
        className={`w-40 pa0 ma2 ba br3 bg-near-white b--${color} pointer shadow-5 bw2 hide-child grow`}
        src={imgUrl}
        alt="category"
      />
    </span>
  );
};

export default CategoryButton;
