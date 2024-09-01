import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <AppRouter />
  </Router>,
  document.getElementById("root")
);
