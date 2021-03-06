import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//importerar alla components
import Navbar from "./components/navbar.component";
import Welcome from "./components/welcome.component";
import Cars from "./components/cars.component";
import Employees from "./components/employees.component";
import signUp from "./components/signUp.component";

//visar alla components på hemsidan
function App() {
  return (
    <div className="containter">
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Welcome} />
        </div>

        <div>
          <Route path="/" exact component={Cars} />
        </div>
        <div className="bg-dark">
          <Route path="/" exact component={Employees} />
        </div>
        <div className="container pt-3 pb-3">
          <Route path="/signup" exact component={signUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
