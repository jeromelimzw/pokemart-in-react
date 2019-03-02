import React from "react";

const CartCalc = ({ totalItems, items }) => {
  return (
    <div className="w-100 center pv3 f5 ph1 animated fadeIn">
      <table class=" tl">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter(a => a.qtyCart !== 0)
            .map(a => {
              return (
                <tr className="animated fadeIn">
                  <td>{a.name}</td>
                  <td>{a.price}</td>
                  <td>{a.qtyCart}</td>
                  <td>{a.qtyCart * a.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      Total Cost: {items.reduce((a, b) => a + b.qtyCart * b.price, 0)}
    </div>
  );
};

export default CartCalc;
