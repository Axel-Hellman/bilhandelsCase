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
      price: undefined
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

    window.location = "/cars"; //Laddar om sidan efter submit
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <h4>Add new carmodel</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter brand"
                value={this.state.brand}
                onChange={this.onChangeBrand}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter Model"
                value={this.state.model}
                onChange={this.onChangeModel}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter price"
                value={this.state.price}
                onChange={this.onChangePrice}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>

        <div className="col-sm-6">
          <h4>Delete a model</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Enter an _id"
                value={this.state.brand}
                onChange={this.onChangeBrand}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
