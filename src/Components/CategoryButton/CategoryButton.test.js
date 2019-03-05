import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import CategoryButton from "./CategoryButton";

test("displays category button with image and text", () => {
  const sampleData = {
    name: "Berries",
    imgUrl: "img/Berries/Razz_Berry.png",
    color: "hot-pink"
  };

  const { getByText, getByAltText } = render(
    <CategoryButton
      imgUrl={sampleData.imgUrl}
      color={sampleData.color}
      name={sampleData.name}
    />
  );

  expect(getByText(/berries/i)).toBeInTheDocument();
  expect(getByAltText(/category/i)).toBeInTheDocument();
});
