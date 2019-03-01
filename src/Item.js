import React from "react";

const Item = ({
  name,
  description,
  imgUrl,
  price,
  qty,
  likes,
  isLiked,
  category
}) => {
  return (
    <div className="br3 ba bg-near-white b--light-red w-20 shadow-5 ma2 mv3 bw2 pl2">
      <h3 className="f6 mb0 mt2 tc ttu">{category}</h3>
      <hr className="mt1 w-30 center" />
      <img
        src={imgUrl}
        className="w-90 bg-light-gray shadow-5 br-100 ba bw2 b--moon-gray"
        alt={name}
      />

      <div className="f3 fw7 flex mt3 ml2">
        <div>{name}</div>
      </div>

      <p class="f5 dark-gray mt1 ml2">{description}</p>
      <hr className="mt0 w-80 center" />
      <div className="flex justify-between fw7">
        <button
          className="w-30 f3 br2 bg-near-white pointer flex justify-around shadow-5 ml2"
          disabled
        >
          <strong className="self-center">{price}</strong>
          <img src="\img\PokéCoin.png" alt="pokecoin" className="w-50 br-100" />
        </button>
        <span className="f4 self-center">{qty} left</span>
        <span className="f4 self-center">
          {likes}
          <i
            class={`${
              isLiked ? "fas" : "far"
            } fa-heart hover-red red pointer grow-large ml2`}
          />
        </span>
      </div>
    </div>
  );
};

export default Item;
