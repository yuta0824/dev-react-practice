import * as React from "react";
import ItemList from "./component/ItemList";
import { Heading } from "./component/Heading";

export const App = () => {
  return (
    <main className="p-4 container mx-auto">
      <Heading label={"h1"}>商品一覧</Heading>
      <ItemList />
    </main>
  );
};
