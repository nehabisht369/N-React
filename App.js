/** 
 * 
 * To create nested HTML structure inside React
 * /**
 * To create multiple children inside a tag or we can say a children with its sibling:-
 * The third parameter which you pass inside the React.createElement would be inside an array of children
 
 <div id="parent">
    <div id ="child">
        <h1>"I'm an h1 tag"</h1>
        <h2>"I'm an h2 tag"</h2>
    </div>
 </div>
 * 
*/

/**
 * ReactElement(Object) => HTML(Browser Understands)
 * React.createElement creates an object which while rendering on DOM converts it into HTML which the browser understands
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" }, // id & abc are attributes given by user
  "Namastey Everyone from React!"
);
// console.log("heading", heading);

// console.log("parent", parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);

/**
heading is basically an object, which has type h1 and it has props as well which are as follows:-
Props are children & the attributes that we are passing in
abc: "xyz"
children : "Namastey Everyone from React!"
id: "heading"
**/

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 
This root.render method  puts the heading tag inside the root of the browser
render method is converting this heading object into the h1 tag

 * 
 * 
 */
