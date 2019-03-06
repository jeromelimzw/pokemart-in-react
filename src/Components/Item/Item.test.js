import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import Item from "./Item";

const details = {
  _id: "e01a8144-4b2d-483b-bffc-50131e259002",
  name: "Master Ball",
  description:
    "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",
  price: 25,
  category: "pokeball",
  qtyStock: 13,
  likes: 15,
  isLiked: false,
  descriptionIsVisible: true,
  imgUrl: "img/Balls/Master_Ball.png"
};

test("renders an item with an image, category, name, description, likes", () => {
  const { getByText, getByAltText } = render(
    <Item
      name={details.name}
      imgUrl={details.imgUrl}
      description={details.description}
      likes={details.likes}
      category={details.category}
      descriptionIsVisible={details.descriptionIsVisible}
    />
  );

  expect(getByAltText("Master Ball")).toHaveAttribute("src", details.imgUrl);
  expect(getByText(/Master Ball/i)).toBeInTheDocument();
  expect(getByText(/pokeball/i)).toBeInTheDocument();
  expect(getByText(/15/i)).toBeInTheDocument();
  expect(getByText(/ultimate level/i)).toBeInTheDocument();
});

test("does not render description when expected not to", () => {
  const details = {
    description:
      "The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.",
    descriptionIsVisible: false
  };

  const { queryByText } = render(
    <Item
      description={details.description}
      descriptionIsVisible={details.descriptionIsVisible}
    />
  );

  expect(queryByText(/ultimate level/i)).not.toBeInTheDocument();
});
