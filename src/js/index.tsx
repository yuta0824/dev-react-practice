import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "../css/main.css";

// Reactコンポーネントをレンダリング
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
