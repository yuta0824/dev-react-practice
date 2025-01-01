import * as React from "react";

type ItemProps = {
  name: string;
  price: string;
};

const CommodityItem: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>価格: {price}</p>
    </div>
  );
};

export default CommodityItem;
