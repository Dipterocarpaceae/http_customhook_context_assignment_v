import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DialogProvider } from "./context/DialogProvider";
import { UserProvider } from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DialogProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </DialogProvider>
  </React.StrictMode>
);
