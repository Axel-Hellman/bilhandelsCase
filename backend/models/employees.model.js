const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//skapar parametrarna för employees
const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true, trim: true, minlength: 3 }
});

const Employees = mongoose.model("Employees", userSchema);

module.exports = Employees;
