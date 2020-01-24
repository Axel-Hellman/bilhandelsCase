const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//skapar parametrarna för sales
const userSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  employee_id: { type: Number, required: true },
  carmodel_id: { type: Number, required: true }
});

const Sales = mongoose.model("Sales", userSchema);

module.exports = Sales;
