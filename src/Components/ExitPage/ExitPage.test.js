import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import ExitPage from "./ExitPage";

test("displays exit page image and text", () => {
  const { getByText, getByAltText } = render(<ExitPage />);

  expect(getByText(/patronage/i)).toBeInTheDocument();
  expect(getByAltText(/bowing cats/i)).toBeInTheDocument();
});
