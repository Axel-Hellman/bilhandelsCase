import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="containter">
      <Router>
        <div className="container">Hello World</div>
      </Router>
    </div>
  );
}

export default App;
