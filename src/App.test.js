import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "react-testing-library";
import App from "./App";

test("displays navigation bar", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByText(/home/i)).toBeInTheDocument();
  expect(getByText(/cart/i)).toBeInTheDocument();
});
