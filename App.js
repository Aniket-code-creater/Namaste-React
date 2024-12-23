import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const parent = React.createElement(
  "div",
  { id: "parents" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "child1" }, "Hello i,m child"),
    React.createElement("h2", { id: "child2" }, "Hello i,m child"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
