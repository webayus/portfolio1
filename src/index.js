import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";
import store from "./app/store";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeContextProvider>,
  document.getElementById("root")
);

reportWebVitals();
