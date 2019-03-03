import React from "react";
import { Link } from "react-router-dom";
import CartCalc from "./CartCalc";

const CartPanel = ({ items, handleRemove }) => {
  const totalInCart = items.reduce((a, b) => a + b.qtyCart, 0);
  const cartItems = items.filter(a => a.qtyCart !== 0);

  return (
    <div className="w-25 h-50 bg-white pv3 tc br3 shadow-5 animated fadeIn">
      <span className="ma0 f3">CART</span> <hr className="w-30 ma1 center" />
      {totalInCart === 0 ? (
        <img src="img/empty-cart-png.png" className="mv6 " alt="empty-cart" />
      ) : (
        <React.Fragment>
          <CartCalc
            totalItems={totalInCart}
            items={cartItems}
            handleRemove={handleRemove}
          />
          <Link
            to="/checkout"
            className="f5 shadow-5 dim tc grow self-center pointer ph4 pv1 white br3 bg-green no-underline"
          >
            PROCEED TO CART
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default CartPanel;
