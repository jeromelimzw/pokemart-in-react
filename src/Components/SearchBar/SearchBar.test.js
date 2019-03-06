import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import SearchBar from "./SearchBar";

test("displays searchbar header and placeholder text", () => {
  const { getByText, getByPlaceholderText } = render(<SearchBar />);

  expect(getByText(/search/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/search here.../i)).toBeInTheDocument();
});
