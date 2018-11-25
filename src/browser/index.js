import React from "react";
import ReactDOM from "react-dom";

import App from "./components/container/App.js";

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

const wrapper = document.getElementById("app"); // needs to be app not root because of the template string
wrapper
  ? ReactDOM.hydrate(<App data={window.__INITIAL_DATA__} />, wrapper)
  : false;
