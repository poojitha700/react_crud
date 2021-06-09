import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "./style.css";
ReactDOM.render(<App />, document.getElementById("root"));
// json-server --watch db.json --port 5000
//go to google and type localhost:5000/posts
// u will see json data there
//then again open react app using yarn start