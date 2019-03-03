import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = props => {
  const { cartItems } = props.location.state;
  const makePayment = () => {
    prompt("Please enter your card number.", "***-***-***-**");
    alert(
      "Your payment has been received. \nYour items will be delivered in 3-4 days."
    );
  };

  const totalCost = cartItems.reduce((a, b) => a + b.qtyCart * b.price, 0);

  return (
    <div className="tc animated fadeIn">
      <h1 className="tracked-mega underline dark-blue">Shopping List</h1>
      <table className="center w-60 h-25 f3 bg-silver white br4 pv3 shadow-5 mb3">
        <thead className="underline">
          <th>Item</th>
          <th>Item Name</th>
          <th>Unit Price</th>
          <th>Quantity Purchased</th>
          <th>SubTotal</th>
        </thead>
        <tr>
          <td colSpan="5">
            <hr />
          </td>
        </tr>

        <tbody>
          {cartItems.map(a => {
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

          <tr className="f3 fw7">
            <td />
            <td />
            <td />
            <td>SubTotal:</td>
            <td>{`\u20bd ${totalCost}`}</td>
          </tr>
          <tr className="f3 fw7">
            <td />
            <td />
            <td />
            <td>5% Tax:</td>
            <td>{`\u20bd ${totalCost * 0.05}`}</td>
          </tr>
          <tr className="f3 fw7">
            <td />
            <td />
            <td />
            <td>Total:</td>
            <td>{`\u20bd ${totalCost * 1.05}`}</td>
          </tr>
        </tbody>
      </table>
      <div className="f3 mv4 bg-silver w-60 center pv3 br4 shadow-5 white">
        Click to Make Payment:
        <div className=" f1 w-40 mt2 center flex justify-around">
          <Link to="/exit">
            <i
              onClick={makePayment}
              className="far fa-credit-card grow-large pointer dark-pink"
            />
          </Link>
          <Link to="/exit">
            <i
              onClick={makePayment}
              className="fab fa-cc-visa grow-large pointer blue"
            />
          </Link>
          <Link to="/exit">
            <i
              onClick={makePayment}
              className="fab fa-cc-stripe grow-large pointer dark-gray"
            />
          </Link>
          <Link to="/exit">
            <i
              onClick={makePayment}
              className="fab fa-cc-jcb grow-large pointer green"
            />
          </Link>
          <Link to="/exit">
            <i
              onClick={makePayment}
              className="fab fa-cc-apple-pay grow-large pointer dark-red"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
