import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
