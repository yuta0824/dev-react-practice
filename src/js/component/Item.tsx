import * as React from "react";

type ItemProps = {
  name: string;
  price: string;
};

const Item: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>価格: {price}</p>
    </div>
  );
};

export default Item;
