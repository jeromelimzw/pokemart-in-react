import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "react-testing-library";
import NavBar from "./NavBar";

beforeEach(cleanup);

test("Menu links to Home, CheckoutPage and ExitPage navigate to the correct pages", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByAltText } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );

  fireEvent.click(getByText(/home/i));
  expect(getByText("PokeBalls")).toBeInTheDocument();

  fireEvent.click(getByText(/cart/i));
  expect(getByAltText("empty-cart")).toBeInTheDocument();

  fireEvent.click(getByText(/sign-out/i));
  expect(getByAltText("bowing cats")).toBeInTheDocument();
});

test("Clicking music icon changes displayed icon", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText, getByPlaceholderText } = render(
    <Router history={history}>
      <NavBar />
    </Router>
  );

  fireEvent.click(getByPlaceholderText(/volume-toggle/i));
  expect(getByText(/up/i)).toBeInTheDocument();
});
