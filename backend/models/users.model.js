const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//skapar parametrarna för users-tabellen
const userSchema = new Schema({
  username: { type: String, required: true, trim: true, minlength: 3 },
  password: { type: String, required: true, trim: true, minlength: 3 },
  isAdmin: { type: Boolean, default: false }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
