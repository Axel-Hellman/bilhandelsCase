import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar.component";
import Cars from "./components/cars.component";

function App() {
  return (
    <div className="containter">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/cars" exact component={Cars} />
        </div>
      </Router>
    </div>
  );
}

export default App;
