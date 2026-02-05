import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
