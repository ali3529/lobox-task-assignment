import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/main/Main.scss";

import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
