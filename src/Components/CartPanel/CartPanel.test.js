import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "react-testing-library";
import CartPanel from "./CartPanel";

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

test("displays checkout page image when cart is empty", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  const { getByAltText } = render(
    <Router history={history}>
      <CartPanel items={sampleDataEmpty} />
    </Router>
  );

  expect(getByAltText(/empty-cart/i)).toBeInTheDocument();
});

test("displays cart items when cart is filled", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  const { queryByAltText, getByText } = render(
    <Router history={history}>
      <CartPanel items={sampleData} />
    </Router>
  );
  expect(queryByAltText(/empty-cart/i)).not.toBeInTheDocument();
  getByText(/limited incubator/i);
});

test("displays accurate total price when cart is filled", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  const { getByText } = render(
    <Router history={history}>
      <CartPanel items={sampleData} />
    </Router>
  );

  expect(getByText(/380/)).toBeInTheDocument();
});
