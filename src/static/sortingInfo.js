const sortOptions = [
  {
    _id: "0001",
    name: "Popular",
    value: "popular"
  },
  {
    _id: "0002",
    name: "Price - Low to High",
    value: "ascendingPrice"
  },
  {
    _id: "0003",
    name: "Price - High to Low",
    value: "descendingPrice"
  }
];

export function getSortOptions() {
  return sortOptions;
}
