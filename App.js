import React from "react";
import ReactDOM from "react-dom/client";

// createElement approach is not a good way as it looks complex.
// That's why we use JSX instead of createElement.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namastey React 🚀"
);
const jsxheading = (
  <h1 id="heading" className="head" tabname="5">
    Namastey React using JSX 🚀
  </h1>
);

console.log("js", jsxheading);

//JSX is not HTML in JS. It has HTML-like or XML-like syntax
// JSX is transpiled before it reaches the JS engine - PARCEL

// As soon as we write JSX, Parcel creates bable which
//  quickly converts this code in such a way that will be understood by React.
// Babel converts the JSX into code that is understood by browser/React/JS engine

// JSX => React.createElement - JS object => HtmlElement(render)

//JSX code is transpiled into React.createElement. React.createElement is a JS object which is
//  rendered onto the DOM as HTML element. Babel converts JSX code into React.createElement
// Visit Babel.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
