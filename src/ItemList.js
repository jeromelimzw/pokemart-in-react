import React from "react";
import Item from "./Item";

const ItemList = ({
  items,
  categories,
  searchfield,
  toggleLike,
  handleAddCart
}) => {
  const filteredItems = items.filter(a =>
    a.name.toLowerCase().includes(searchfield.toLowerCase())
  );
  const length = filteredItems.length;

  return (
    <div className="w-70 ml5">
      <span className=" f4">
        {length === 0
          ? `No results found for ${searchfield} ...`
          : `displaying ${length} items ...`}
      </span>
      <div className="flex flex-wrap">
        {filteredItems
          .sort((a, b) => b.likes - a.likes)
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
              toggleLike={() => toggleLike(item._id)}
              handleAddCart={() => handleAddCart(item._id)}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
