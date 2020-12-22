import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

ReactDOM.render(<App />, document.getElementById("root"));