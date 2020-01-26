import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="p-5 mb-2 bg-info text-white ">
        <div className="p-5 text-center">
          <h1>Welcome!</h1>
          <p>Find your new dream car, right here!</p>
        </div>
      </div>
    );
  }
}
