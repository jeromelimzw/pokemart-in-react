import React from "react";
import Item from "./Item";
import items from "./itemInfo";

const ItemList = () => {
  return (
    <div className="flex">
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
      }
    </div>
  );
};

export default ItemList;
