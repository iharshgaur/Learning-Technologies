// import React from "react";
// import {createRoot} from "react-dom/client";
import { React } from "./React";
import { MyReactDom } from "./React";

class ReactElementFactory {

  constructor() {
    this.elements = []
  }

  createElement(type, props, value) {
    this.elements.push(React.createElement(type, props, value))
  }

}


const reactElements = new ReactElementFactory()

reactElements.createElement("h1", {id: "name"}, "Hello World")
reactElements.createElement("div", {id: "text"}, "Welcome User")
reactElements.createElement("li", {id: "li1"}, "First")
reactElements.createElement("li", {id: "li2"}, "Second")
reactElements.createElement("li", {id: "li3"}, "Third")

const element = React.createElement("div", {id: "element"}, ...reactElements.elements);
console.log(element)

const root  = document.getElementById("root")
MyReactDom.render(element, root);
// const root = createRoot(document.getElementById('root'));
// root.render(element)