import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { AppStateProvider } from "./context/AppContext";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>,
);
