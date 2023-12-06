import React from "react";
import ReactDOM from "react-dom/client";

const num = 10000;

const elem = <span>React Element</span>;

const Title = () => {
  return (
    <h1 className="head" tabIndex="4">
      Hey
    </h1>
  );
};

// fn1 & fn2 will return true as they are same

// React functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      {num + 500}

      <Title />
      <h3>Namastey React using functional component 🚀 </h3>
    </div>
  );
};

// React element
const head = (
  <h1 id="heading" className="head" tabname="5">
    {/* Namastey React using JSX 🚀 Namaste React */}
    {elem}
    {Title()}
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

// Difference between Element & component
// Component composition -> Component inside component
// Inside JSX when we write curly braces then inside curly braces {} we can run any piece of JS code.

const fn1 = () => {
  return true;
};

const fn2 = () => true; // shorthand syntax
