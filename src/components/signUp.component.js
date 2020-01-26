import React, { Component } from "react";
import Axios from "axios";

export default class signUp extends Component {
  constructor(props) {
    super(props);

    //binder .this så att den inte blir "undefined"
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    Axios.post("http://localhost:5000/users/add", newUser).then(res =>
      console.log(res.data)
    );

    window.location = "/"; //Laddar wellcome-sidan efter submit
  }

  render() {
    return (
      <div className="p-5 mb-2 bg-info text-white col-sm-8 mx-auto rounded">
        <div className="p-5 text-center">
          <h4>Create account</h4>
          <div className="pr-4 pl-4">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-dark" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
