import React, { Component } from "react";
import Axios from "axios";

//skapar en funktional-react-component för att ta emot props och returnera jsx-kod
const Employee = props => (
  <tr>
    <td>{props.employee.name}</td>
    <td>{"Sum of sales"}</td>
  </tr>
);

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  //kallas direkt efter komponenten blivigt mountad: får listan av employees från databasen
  componentDidMount() {
    Axios.get("http://localhost:5000/employees/")
      .then(Response => {
        this.setState({ employees: Response.data });
      })
      .catch(Error => {
        console.log(Error);
      });
  }

  //itererar igenom listan employees, och returnerar (med hjälp av komponenten "Employee") employees parameter
  employeeList() {
    return this.state.employees.map(currentemployee => {
      return <Employee employee={currentemployee} />;
    });
  }

  render() {
    return (
      <div className="pt-4 pb-3 container">
        <h4 className="text-white">Employees</h4>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total sales</th>
            </tr>
          </thead>
          <tbody>{this.employeeList()}</tbody>
        </table>
      </div>
    );
  }
}
