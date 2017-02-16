"use strict";
require("jquery");
require("bootstrap");
var React = require("react");
var ReactDOM = require("react-dom");
var root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(React.createElement("div", null,
    React.createElement("h1", null, "Hello, World!"),
    React.createElement("h2", null, "What is up?")), root);
