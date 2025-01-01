import * as React from "react";
import { createRoot } from "react-dom/client";
import ItemList from "./component/ItemList";
import "../css/main.css";

// Reactコンポーネントをレンダリング
const root = createRoot(document.getElementById("app")!);
root.render(<ItemList />);
