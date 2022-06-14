import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/App.css";
import ProviderCards from "./providers/ProviderCards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProviderCards>
    <App />
  </ProviderCards>
);
