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
    <div class="br3 ba bg-near-white b--light-red w-20 ma0 shadow-5 bw3 ma2">
      <div className="ba pr2 pb2 b--washed-red bw3 ma0">
        <h3 className="f6 mb0 mt0 tc ttu">{category}</h3>
        <hr className="mt1 w-30 center" />
        <img
          src={imgUrl}
          className="w-100 bg-light-gray shadow-5 br-100 ba bw2 b--moon-gray grow pointer"
          alt={name}
        />

        <div className="f3 fw7 flex mt3">
          <div>{name}</div>
        </div>

        <p class="f5 lh-copy dark-gray mt1">{description}</p>
        <hr className="mt0 w-80 center" />
        <div className="flex justify-between fw7">
          <button className="w-30 f3 br2 bg-near-white pointer flex justify-around shadow-5 grow ml2">
            <strong className="self-center">{price}</strong>
            <img
              src="\img\PokéCoin.png"
              alt="pokecoin"
              className="w-50 br-100"
            />
          </button>
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
    </div>
  );
};

export default Item;
