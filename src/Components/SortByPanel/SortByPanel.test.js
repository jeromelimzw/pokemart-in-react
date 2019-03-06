import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import * as SortingInfo from "../../static/sortingInfo";
import SortByPanel from "./SortByPanel";

const sampleSort = [
  {
    _id: "0001",
    name: "Popular",
    value: "popular"
  },
  {
    _id: "0002",
    name: "Price - Low to High",
    value: "ascendingPrice"
  }
];

beforeEach(() => {
  jest
    .spyOn(SortingInfo, "getSortOptions")
    .mockImplementation(() => sampleSort);
});

afterEach(() => {
  SortingInfo.getSortOptions.mockRestore();
});

test("displays list of two category buttons on load", () => {
  const { getByText } = render(<SortByPanel />);

  expect(getByText(/popular/i)).toBeInTheDocument();
  expect(getByText(/low to high/i)).toBeInTheDocument();
});
