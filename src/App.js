import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//importerar alla components
import Navbar from "./components/navbar.component";
import Cars from "./components/cars.component";
import Employees from "./components/employees.component";

//visar alla components på hemsidan
function App() {
  return (
    <div className="containter">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/cars" exact component={Cars} />
          <Route path="/employees" exact component={Employees} />
        </div>
      </Router>
    </div>
  );
}

export default App;
