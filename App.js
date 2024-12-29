import React from "react";
import ReactDOM from "react-dom/client";

// React Elements
//const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - is not html in java-script, html like html
//jsx engine can not able to read this but but parcel is converting this code into js and then send to jsx parcel - babel
//babel transpile it into jsx
const jsxheading = (
  <h1 id="heading" className="jsxclass" tabIndex={1}>
    Namaste React using jsx!
  </h1>
);

root.render(jsxheading);
