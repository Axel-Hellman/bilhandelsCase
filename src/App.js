import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//importerar alla components
import Navbar from "./components/navbar.component";
import Welcome from "./components/welcome.component";
import Cars from "./components/cars.component";
import Employees from "./components/employees.component";

//visar alla components på hemsidan
function App() {
  return (
    <div className="containter">
      <Router>
        <div>
          <Navbar />
          <Route component={Welcome} />
        </div>
        <div className="container pt-3 pb-3">
          <Route component={Cars} />
        </div>
        <div className="bg-dark pt-4 pb-3">
          <div className="container">
            <Route component={Employees} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
