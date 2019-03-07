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
  toggleLikes,
  handleAddCart,
  descriptionIsVisible,
  toggleDescription
}) => {
  return (
    <div
      className={` ba bg-near-white b--${color} w-20 shadow-5 ma3 bw2 ph2 animated fadeIn`}
    >
      <h3 className={`f6 mb0 mt2 tc ttu ${color}`}>{category}</h3>
      <hr className="mt1 w-30 center" />

      <img
        src={imgUrl}
        className="w-90 bg-light-gray ba br-100 b--moon-gray shadow-5 bw2 grow-large pointer"
        alt={name}
      />

      <div className="flex flex-column justify-between mt2">
        <div>
          {descriptionIsVisible ? (
            <React.Fragment>
              <div className="flex justify-between">
                <span className="f4 fw7">{name}</span>
                <i
                  className="fas fa-minus-square f4 pointer"
                  onClick={toggleDescription}
                />
              </div>
              <span className="f5 dark-gray animated fadeInDown lh-title">
                {description}
              </span>
              <hr className="mt2 w-80 center" />
            </React.Fragment>
          ) : (
            <div className="flex justify-between">
              <span className="f4 fw7 mb2">{name}</span>
              <i
                className="fas fa-plus-square f4 pointer"
                onClick={toggleDescription}
              />
            </div>
          )}
        </div>
        <div className="flex justify-between fw6 mb1">
          {qty !== 0 && (
            <button
              className=" f5 br2 bg-near-white pointer flex justify-around shadow-5 pv1 ph2"
              onClick={handleAddCart}
            >
              <strong className="self-center">{price}</strong>
              <img
                src="\img\PokéCoin.png"
                alt="pokecoin"
                className="w-50 br-100"
              />
            </button>
          )}
          <div className="f5 gray ph3 center">{`${qty} left`}</div>
          <div className="f5 self-center">
            <span>{likes}</span>
            <i
              className={`${
                isLiked ? "fas" : "far"
              } fa-heart hover-red red pointer grow-large`}
              onClick={toggleLikes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
