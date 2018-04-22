import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/app";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
