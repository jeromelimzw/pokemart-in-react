import React from "react";
import { Link } from "react-router-dom";
import CartCalc from "./CartCalc";

const CartPanel = ({ items, handleRemove }) => {
  const totalInCart = items.reduce((a, b) => a + b.qtyCart, 0);
  const cartItems = items.filter(a => a.qtyCart !== 0);

  return (
    <div className="w-25 h-50 bg-white tc shadow-5 animated fadeIn pb3">
      <div className="pv1 bg-gray white f2 pl3 tl fw3 mb2">cart</div>
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
            className="f5 shadow-5 hover-bg-light-green hover-dark-green tc grow self-center pointer ph4 pv1 white b--green bg-green no-underline"
          >
            PROCEED TO CART
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default CartPanel;
