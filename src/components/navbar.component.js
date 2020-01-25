import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to={"/"} className="navbar-brand">
          Lunicore
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/cars" className="nav-link">
                Cars
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/employees" className="nav-link">
                Employees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
