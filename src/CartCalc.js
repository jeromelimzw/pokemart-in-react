import React from "react";

const CartCalc = ({ items, handleRemove }) => {
  const totalCost = items.reduce((a, b) => a + b.qtyCart * b.price, 0);
  return (
    <div className="pv3 f5 ph1 animated fadeIn">
      <table className="tl w-100 h-25 fw6">
        <tbody>
          {items.map(a => {
            return (
              <React.Fragment key={a._id}>
                <tr className="animated fadeIn">
                  <td rowSpan="2">
                    <img
                      src={a.imgUrl}
                      alt={a.name}
                      width="50"
                      className="ba br3 bg-moon-gray b--transparent shadow-5"
                    />
                  </td>
                  <td>{a.name}</td>
                  <td>Quantity:</td>
                  <td>{a.qtyCart}</td>
                  <td>
                    <i
                      className="far fa-times-circle pointer gray dim f3"
                      onClick={() => handleRemove(a._id)}
                    />
                  </td>
                </tr>

                <tr className="animated fadeIn">
                  <td>
                    {a.price}
                    <img src="img\PokéCoin.png" width="20" alt="" />
                  </td>
                  <td>SubTotal:</td>
                  <td>{`\u20bd ${a.price * a.qtyCart} `}</td>
                </tr>
                <tr>
                  <td colSpan="5">
                    <hr />
                  </td>
                </tr>
              </React.Fragment>
            );
          })}

          <tr className="f3">
            <td />
            <td>Total:</td>
            <td>{`\u20bd ${totalCost}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartCalc;
