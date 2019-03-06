import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render } from "react-testing-library";
import ItemList from "./ItemList";

const sampleData = [
  {
    _id: "58ebf299-0597-4599-be1e-e90d235cc076",
    name: "Fast TM",
    description:
      "This Technical Machine item is used to teach your Pokémon a new Fast Attack. ",
    price: 50,
    categoryId: "0007",
    qtyStock: 20,
    qtyCart: 0,
    likes: 24,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/TMs/Charged_TM.png"
  },
  {
    _id: "a37d33cc-b67d-48eb-ba83-0c86cb869ee5",
    name: "Razz Berry",
    description:
      "Feed this to a Pokémon, and it will be easier to catch on your next throw.",
    price: 5,
    categoryId: "0002",
    qtyStock: 20,
    qtyCart: 0,
    likes: 6,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/Berries/Razz_Berry.png"
  },
  {
    _id: "7730b2eb-f479-451b-ad25-cf9819fb535f",
    name: "Pinap Berry",
    description: "Feed this to a Pokémon to make it drop more candy.",
    price: 10,
    categoryId: "0002",
    qtyStock: 20,
    qtyCart: 0,
    likes: 12,
    isLiked: false,
    descriptionIsVisible: false,
    imgUrl: "img/Berries/Pinap_Berry.png"
  }
];

const sampleDataEmpty = [];

const categories = [
  {
    _id: "0002",
    name: "Berries",
    imgUrl: "img/Berries/Razz_Berry.png",
    color: "hot-pink"
  },

  {
    _id: "0007",
    name: "TMs",
    imgUrl: "img/TMs/Fast_TM.png",
    color: "green"
  }
];

test("renders 3 item cards given item information ", () => {
  const { getAllByText } = render(
    <ItemList
      items={sampleData}
      categories={categories}
      searchfield=""
      categoryfilter=""
      sorting=""
    />
  );

  expect(getAllByText(/left/i).length).toBe(3);
});

test("renders message if no items given as input ", () => {
  const { getByText } = render(
    <ItemList
      items={sampleDataEmpty}
      categories={categories}
      searchfield=""
      categoryfilter=""
      sorting=""
    />
  );

  expect(getByText(/try expanding search criteria/i)).toBeInTheDocument();
});
