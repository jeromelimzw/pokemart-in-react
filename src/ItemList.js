import React from "react";
import Item from "./Item";
import items from "./itemInfo";

const ItemList = () => {
  return (
    <div className="w-70">
      <span className="ml4 f4">displaying {items.length} items ...</span>
      <div className="flex flex-wrap justify-around">
        {items.map(item => (
          <Item
            key={item._id}
            name={item.name}
            description={item.description}
            imgUrl={item.imgUrl}
            price={item.price}
            qty={item.qty}
            likes={item.likes}
            isLiked={item.isLiked}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
