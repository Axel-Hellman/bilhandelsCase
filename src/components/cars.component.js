import React, { Component } from "react";

export default class Cars extends Component {
  constructor(props) {
    super(props);

    //binder .this så att den inte blir "undefined"
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      //"id": null,
      brand: "",
      model: "",
      price: 0
    };
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    });
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const carModel = {
      brand: this.state.brand,
      model: this.state.model,
      price: this.state.price
    };

    console.log(carModel);

    window.location = "/cars"; // tar dig tilbaka till startsidan efter sumit
  }

  render() {
    return (
      <div>
        <h4>Add new carmodel</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of brand: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.brand}
              onChange={this.onChangeBrand}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
