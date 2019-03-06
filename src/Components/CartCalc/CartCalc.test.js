import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import CartCalc from "./CartCalc";

const sampleData = [
  {
    _id: 1,
    name: "Fast TM",
    price: 50,
    qtyCart: 32,
    imgUrl: "img/TMs/Charged_TM.png"
  },
  {
    _id: 2,
    name: "Razz Berry",
    price: 5,
    qtyCart: 61,
    imgUrl: "img/Berries/Razz_Berry.png"
  },
  {
    _id: 3,
    name: "Pinap Berry",
    price: 10,
    qtyCart: 99,
    imgUrl: "img/Berries/Pinap_Berry.png"
  }
];

test("renders 3 item cards given item information and gives accurate total price ", () => {
  const { getByText, getAllByText } = render(<CartCalc items={sampleData} />);

  expect(getByText(/razz berry/i)).toBeInTheDocument();
  expect(getByText(/pinap berry/i)).toBeInTheDocument();
  expect(getByText(/99/i)).toBeInTheDocument();
  expect(getAllByText(/quantity/i).length).toBe(3);
});

test("renders accurate total price for items provided ", () => {
  const { getByText } = render(<CartCalc items={sampleData} />);

  expect(getByText(/2895/i)).toBeInTheDocument();
});
