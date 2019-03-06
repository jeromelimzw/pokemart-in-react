import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import CategoryFilter from "./CategoryFilter";

const sampleData = [
  {
    _id: "0006",
    name: "Passes",
    imgUrl: "img/Passes/Raid_Pass.png",
    color: "light-green"
  },
  {
    _id: "0007",
    name: "TMs",
    imgUrl: "img/TMs/Fast_TM.png",
    color: "green"
  }
];

test("renders category buttons given category information ", () => {
  const { getByText } = render(<CategoryFilter categories={sampleData} />);

  expect(getByText(/tms/i)).toBeInTheDocument();
  expect(getByText(/passes/i)).toBeInTheDocument();
});
