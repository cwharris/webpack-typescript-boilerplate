import "jquery";
import "bootstrap";
import * as React from "react";
import * as ReactDOM from "react-dom";

const root = document.createElement("div");

document.body.appendChild(root);

ReactDOM.render(
    <div>
        <h1>Hello, World!</h1>
        <h2>What is up?</h2>
    </div>,
    root
);
