const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//skapar parametrarna för carmodels
const carmodelSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true }
});

const Carmodels = mongoose.model("Carmodels", carmodelSchema);

module.exports = Carmodels;
