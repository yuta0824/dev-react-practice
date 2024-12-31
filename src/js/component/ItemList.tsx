import * as React from "react";
import Item from "./Item";

const ItemList: React.FC = () => {
  const items = [
    { name: "リンゴ", price: "100円" },
    { name: "バナナ", price: "150円" },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ItemList;
