import React from "react";
import Item from "./Item";

const ItemList = ({
  items,
  categories,
  searchfield,
  toggleLikes,
  handleAddCart,
  categoryfilter,
  sorting,
  toggleDescription
}) => {
  const filteredItems = items
    .filter(a => a.qtyStock !== 0)
    .filter(
      a =>
        a.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        a.description.toLowerCase().includes(searchfield.toLowerCase())
    )
    .filter(a => a.categoryId.includes(categoryfilter));

  const length = filteredItems.length;

  return (
    <div className="w-70 center">
      <span className=" f4 ml4">
        {length === 0
          ? `no items found ...  try expanding search criteria ...`
          : `displaying ${length} items ...`}
      </span>
      <div className="flex flex-wrap mh2 pl4">
        {filteredItems
          .sort((a, b) => {
            return sorting === "popular"
              ? b.likes - a.likes
              : sorting === "ascendingPrice"
              ? a.price - b.price
              : sorting === "descendingPrice"
              ? b.price - a.price
              : undefined;
          })

          .map(item => (
            <Item
              key={item._id}
              name={item.name}
              description={item.description}
              imgUrl={item.imgUrl}
              price={item.price}
              qty={item.qtyStock}
              likes={item.likes}
              isLiked={item.isLiked}
              category={categories.find(a => a._id === item.categoryId).name}
              color={categories.find(a => a._id === item.categoryId).color}
              toggleLikes={() => toggleLikes(item._id)}
              handleAddCart={() => handleAddCart(item._id)}
              descriptionIsVisible={item.descriptionIsVisible}
              toggleDescription={toggleDescription}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
