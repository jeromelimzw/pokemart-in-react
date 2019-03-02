import React from "react";

const Item = ({
  name,
  description,
  imgUrl,
  price,
  qty,
  likes,
  isLiked,
  category,
  color,
  toggleLike
}) => {
  return (
    <div
      className={`br3 ba bg-near-white b--${color} w-20 shadow-5 ma3 bw2 ph2`}
    >
      <h3 className={`f6 mb0 mt2 tc ttu ${color}`}>{category}</h3>
      <hr className="mt1 w-30 center" />

      <img
        src={imgUrl}
        className="w-90 bg-light-gray ba br-100 b--moon-gray shadow-5 bw2 grow-large pointer"
        alt={name}
      />

      <div className="flex flex-column justify-around mt2">
        <div>
          <div className="f4 fw7">{name}</div>
          <p className="f5 dark-gray">{description}</p>
          <hr className="mt0 w-80 center" />
        </div>
        <div className="flex justify-between fw6 mb2">
          {qty !== 0 && (
            <button className="w-40 f3 br2 bg-near-white pointer flex justify-around shadow-5 pv1">
              <strong className="self-center">{price}</strong>
              <img
                src="\img\PokéCoin.png"
                alt="pokecoin"
                className="w-50 br-100"
              />
            </button>
          )}
          <span className="f5 gray self-center">
            {qty === 0 ? "-OUT OF STOCK-" : `${qty} left`}
          </span>
          <span className="f4 self-center">
            {isLiked ? likes + 1 : likes}
            <i
              className={`${
                isLiked ? "fas" : "far"
              } fa-heart hover-red red pointer grow-large`}
              onClick={toggleLike}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
