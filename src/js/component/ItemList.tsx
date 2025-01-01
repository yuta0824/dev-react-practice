import * as React from "react";
import CommodityItem from "./CommodityItem";

const ItemList: React.FC = () => {
  const items = [
    { id: 1, name: "リンゴ", price: "100円" },
    { id: 2, name: "バナナ", price: "150円" },
  ];

  return (
    <div className="mt-4 flex flex-col gap-4">
      {items.map((item) => (
        <CommodityItem key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ItemList;
