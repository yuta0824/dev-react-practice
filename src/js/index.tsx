import * as React from "react";
import { createRoot } from "react-dom/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

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

// Reactコンポーネントをレンダリング
const root = createRoot(document.getElementById("app")!);
root.render(<ItemList />);
