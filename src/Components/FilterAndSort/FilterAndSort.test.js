import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import FilterAndSort from "./FilterAndSort";

test("displays search and filter panels", () => {
  const { getByText } = render(<FilterAndSort />);

  expect(getByText(/search/i)).toBeInTheDocument();
  expect(getByText(/sort/i)).toBeInTheDocument();
});
