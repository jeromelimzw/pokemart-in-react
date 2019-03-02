import React from "react";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <div className="w-20 h-50 bg-white pv3 tc br3 shadow-5">
      <span className="ma0 f3">CART</span> <hr className="w-30 ma1 center" />
      <img src="img/empty-cart-png.png" className="mv6" alt="empty-cart" />
      <Link
        to="/checkout"
        className="f5 shadow-5 dim tc grow self-center pointer ph4 pv1 white br3 bg-green no-underline"
      >
        PROCEED TO CART
      </Link>
    </div>
  );
};

export default CartPanel;
