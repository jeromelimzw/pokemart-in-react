import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "react-testing-library";
import * as ItemInfo from "../../static/itemInfo";
import CheckoutPage from "./CheckoutPage";

const sampleDataEmpty = [];

const sampleData = [
  {
    _id: "d8de896b-4bf3-42be-9313-3d145a7a9c07",
    name: "Super Incubator",
    price: 200,
    qtyCart: 1
  },
  {
    _id: "f74852ff-5a71-49d2-809e-47e9871e34b2",
    name: "Limited Incubator",
    price: 150,
    qtyCart: 1
  },
  {
    _id: "9c04bc8b-ad1a-4b4f-9593-c64cde3ea024",
    name: "Gift",
    price: 30,
    qtyCart: 1
  }
];

afterEach(() => {
  ItemInfo.getCartItems.mockRestore();
});

test("displays checkout page image when cart is empty", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  jest
    .spyOn(ItemInfo, "getCartItems")
    .mockImplementation(() => sampleDataEmpty);
  const { getByAltText } = render(
    <Router history={history}>
      <CheckoutPage />
    </Router>
  );

  expect(getByAltText(/empty-cart/i)).toBeInTheDocument();
});

test("displays cart items when cart is filled", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  jest.spyOn(ItemInfo, "getCartItems").mockImplementation(() => sampleData);
  const { queryByAltText, getByText } = render(
    <Router history={history}>
      <CheckoutPage />
    </Router>
  );
  expect(queryByAltText(/empty-cart/i)).not.toBeInTheDocument();
  expect(getByText(/380/)).toBeInTheDocument();
  expect(getByText(/19/)).toBeInTheDocument();
  expect(getByText(/399/)).toBeInTheDocument();
});

//requires mocking to work the second test

test("displays credit card options", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  jest.spyOn(ItemInfo, "getCartItems").mockImplementation(() => sampleData);
  const { getByText } = render(
    <Router history={history}>
      <CheckoutPage />
    </Router>
  );

  expect(getByText(/click to make payment/i)).toBeInTheDocument();
});
