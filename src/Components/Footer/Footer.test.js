import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Footer from "./Footer";

test("displays footer text", () => {
  const { getByText, getByAltText } = render(<Footer />);

  expect(getByText(/tachyons/i)).toBeInTheDocument();
  expect(getByAltText(/github/i)).toBeInTheDocument();
});
