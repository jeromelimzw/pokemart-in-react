import React from "react";
import { Link } from "react-router-dom";
import { getCardInfo } from "./static/creditCardInfo";
import { getCartItems, handlePayment } from "./static/itemInfo";

const CheckoutPage = props => {
  const makePayment = () => {
    alert(
      "Your payment has been received. \nYour items will be delivered in 3-4 days."
    );
    handlePayment();
  };

  const totalCost = getCartItems()
    .reduce((a, b) => a + b.qtyCart * b.price, 0)
    .toFixed(2);

  return (
    <div className="tc animated fadeIn">
      {getCartItems().length === 0 ? (
        <img src="img/empty-cart-png.png" className="mv6 " alt="empty-cart" />
      ) : (
        <React.Fragment>
          <h1 className="tracked-mega">shopping cart</h1>
          <table className="center w-60 h-25 f3 bg-silver white pv3 shadow-5 mb3">
            <tbody>
              <tr>
                <td>item</td>
                <td>name</td>
                <td>unit price</td>
                <td>quantity purchased</td>
                <td>sub-total</td>
              </tr>
              <tr>
                <td colSpan="5">
                  <hr />
                </td>
              </tr>

              {getCartItems().map(a => {
                return (
                  <React.Fragment key={a._id}>
                    <tr className="animated fadeIn fw6 f4">
                      <td>
                        <img
                          src={a.imgUrl}
                          alt={a.name}
                          width="80"
                          className="ba br3 bg-near-white b--transparent shadow-5"
                        />
                      </td>
                      <td>{a.name}</td>
                      <td>{`\u20bd ${a.price}`}</td>
                      <td>{a.qtyCart}</td>
                      <td>{`\u20bd ${a.qtyCart * a.price}`}</td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <hr />
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}

              <tr className="f3 fw7 tl">
                <td />
                <td />
                <td />
                <td>sub-total:</td>
                <td>{`\u20bd ${totalCost}`}</td>
              </tr>
              <tr className="f3 fw7 tl">
                <td />
                <td />
                <td />
                <td>5% tax:</td>
                <td>{`\u20bd ${totalCost * 0.05}`}</td>
              </tr>
              <tr className="f3 fw7 tl">
                <td />
                <td />
                <td />
                <td>total:</td>
                <td>{`\u20bd ${totalCost * 1.05}`}</td>
              </tr>
            </tbody>
          </table>
          <div className="f3 mv4 bg-silver w-60 center pv3 shadow-5 white">
            click to make payment:
            <div className=" f1 w-50 mt2 center flex justify-around">
              {getCardInfo().map(a => (
                <Link to="/exit" key={a._id}>
                  <i
                    onClick={makePayment}
                    className={`${a.style} grow-large pointer shadow-5`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CheckoutPage;
