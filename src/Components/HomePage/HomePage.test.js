import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "react-testing-library";
import * as ItemInfo from "../../static/itemInfo";
import HomePage from "./HomePage";

const sampleData = [
  {
    _id: "b397f4be-050d-4e3c-a777-034bfc958a90",
    name: "Nanab Berry",
    description:
      "Feed this to a Pokémon to calm it down, making it less erratic.",
    price: 10,
    categoryId: "0002",
    qtyStock: 20,
    qtyCart: 0,
    likes: 14,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/Berries/Nanab_Berry.png"
  },
  {
    _id: "46ef84e0-673d-49ff-9013-be9d3af0c6a7",
    name: "Lure Module",
    description:
      "A module that attracts Pokémon to a PokéStop for 30 min. The effect benefits other people nearby.",
    price: 100,
    categoryId: "0008",
    qtyStock: 20,
    qtyCart: 0,
    likes: 63,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/Misc/Lure_Module.png"
  },
  {
    _id: "58ebf299-0597-4599-be1e-e90d235cc076",
    name: "Fast TM",
    description:
      "This Technical Machine item is used to teach your Pokémon a new Fast Attack. ",
    price: 50,
    categoryId: "0007",
    qtyStock: 20,
    qtyCart: 0,
    likes: 24,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/TMs/Charged_TM.png"
  }
];

const history = createMemoryHistory({ initialEntries: ["/"] });

beforeEach(() => {
  jest.spyOn(ItemInfo, "getItems").mockImplementation(() => sampleData);
});

afterEach(() => {
  ItemInfo.getItems.mockRestore();
});

test("displays list of 3 items on load", () => {
  const { getAllByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );
  expect(getAllByText(/left/i).length).toBe(3);
});

test("displays only 1 item of TMs category when filtered by category", () => {
  const { getAllByText, getByText, getByPlaceholderText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/tms/i));

  expect(getAllByText(/left/i).length).toBe(1);
  expect(getByText(/fast tm/i)).toBeInTheDocument();
});

test("sorts items by likes when |sort by popular| is selected", () => {
  const { getByPlaceholderText, getAllByPlaceholderText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/popular/i));

  const first = getAllByPlaceholderText("cards-on-display")[0];
  const second = getAllByPlaceholderText("cards-on-display")[1];
  const third = getAllByPlaceholderText("cards-on-display")[2];

  expect(getAllByPlaceholderText("cards-on-display").length).toEqual(3);
  expect(first).toHaveTextContent(/lure/i);
  expect(second).toHaveTextContent(/fast/i);
  expect(third).toHaveTextContent(/nanab/i);
});

test("sorts items by ascending price when |sort by price -low to high| is selected", () => {
  const { getByPlaceholderText, getAllByPlaceholderText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/low to high/i));

  const first = getAllByPlaceholderText("cards-on-display")[0];
  const second = getAllByPlaceholderText("cards-on-display")[1];
  const third = getAllByPlaceholderText("cards-on-display")[2];

  expect(getAllByPlaceholderText("cards-on-display").length).toEqual(3);
  expect(first).toHaveTextContent(/nanab/i);
  expect(second).toHaveTextContent(/fast/i);
  expect(third).toHaveTextContent(/lure/i);
});

test("sorts items by descending price when |sort by price -high to low| is selected", () => {
  const { getByPlaceholderText, getAllByPlaceholderText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/high to low/i));

  const first = getAllByPlaceholderText("cards-on-display")[0];
  const second = getAllByPlaceholderText("cards-on-display")[1];
  const third = getAllByPlaceholderText("cards-on-display")[2];

  expect(getAllByPlaceholderText("cards-on-display").length).toEqual(3);
  expect(first).toHaveTextContent(/lure/i);
  expect(second).toHaveTextContent(/fast/i);
  expect(third).toHaveTextContent(/nanab/i);
});

test("description of items is not displayed on load", () => {
  const { queryByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  expect(queryByText(/making it less erratic/i)).not.toBeInTheDocument();
});

test("displays description of items when + button is pressed", () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/toggle-description/i));
  expect(getByText(/making it less erratic/i)).toBeInTheDocument();
});

test("number of likes increases when heart is pressed", () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/likes-toggle-lure module/i));
  expect(getByText(/64/i)).toBeInTheDocument();
});

xtest("displays only 1 item of matching description when filtered by searchbar", () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.change(getByPlaceholderText(/search here/i), {
    target: { value: "technical" }
  });

  expect(getByText(/fast/i)).toBeInTheDocument();
});

xtest("displays only 1 item of matching name when filtered by searchbar", () => {
  const { getByPlaceholderText, getAllByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.change(getByPlaceholderText(/search here/i), {
    target: { value: [new File([""], "nanab", { type: "text" })] }
  });
  expect(getAllByPlaceholderText("cards-on-display").length).toEqual(1);
  expect(getByText(/nanab/i)).toBeInTheDocument();
});

test("total price in cart is accurate when 2 items are bought", () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/add-cart-lure module/i));
  fireEvent.click(getByPlaceholderText(/add-cart-nanab berry/i));
  expect(getByText(/110/i)).toBeInTheDocument();
});

test("total price in cart is accurate when items are bought and one removed", () => {
  const { getByPlaceholderText, getByText } = render(
    <Router history={history}>
      <HomePage />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/add-cart-lure module/i));
  fireEvent.click(getByPlaceholderText(/add-cart-lure module/i));
  fireEvent.click(getByPlaceholderText(/add-cart-nanab berry/i));
  fireEvent.click(getByPlaceholderText(/remove-cart-nanab berry/i));

  expect(getByText(/200/i)).toBeInTheDocument();
});
