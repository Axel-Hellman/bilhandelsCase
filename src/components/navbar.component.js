import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-lg sticky-top">
        <Link to={"/"} className="navbar-brand">
          CarCompany
        </Link>

        <Link to={"/signUp"} className="navbar-brand">
          signUp
        </Link>
      </nav>
    );
  }
}
