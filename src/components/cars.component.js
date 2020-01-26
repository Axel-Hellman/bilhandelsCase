import React, { Component } from "react";
import Axios from "axios";

const Car = props => (
  <tr>
    <td>{props.car.id}</td>
    <td>{props.car.brand}</td>
    <td>{props.car.model}</td>
    <td>{props.car.price}</td>
    <td>
      <a
        href="#"
        onClick={() => {
          props.deleteCars(props.car._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class Cars extends Component {
  constructor(props) {
    super(props);

    //binder .this så att den inte blir "undefined"
    this.deleteCars = this.deleteCars.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cars: [],
      id: this.carListlength,
      brand: "",
      model: "",
      price: ""
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/carmodels/")
      .then(Response => {
        this.setState({ cars: Response.data });
      })
      .catch(Error => {
        console.log(Error);
      });
  }

  carList() {
    return this.state.cars.map(currentCar => {
      return (
        <Car
          car={currentCar}
          deleteCars={this.deleteCars}
          key={currentCar._id}
        />
      );
    });
  }

  deleteCars(id) {
    Axios.delete("http://localhost:5000/carmodels/" + id).then(res =>
      console.log(res.data)
    );
    this.setState({
      cars: this.state.cars.filter(el => el._id !== id)
    });
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
      id: this.state.cars.length + 1,
      brand: this.state.brand,
      model: this.state.model,
      price: this.state.price
    };

    console.log(this.state.cars.length);

    Axios.post("http://localhost:5000/carmodels/add", carModel).then(res =>
      console.log(res.data)
    );

    window.location = "/cars"; //Laddar om sidan efter submit
  }

  render() {
    return (
      <div>
        <div>
          <h4>Available car models</h4>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.carList()}</tbody>
          </table>
        </div>

        <div>
          <h4>Add car model</h4>
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
                type="number"
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
      </div>
    );
  }
}
