const router = require("express").Router();
let Employee = require("../models/employees.model");

router.route("/").get((req, res) => {
  Employee.find() //hittar alla employees på MongoDB-Atlas databasen
    .then(employees => res.json(employees)) //returnerar sedan employees i .json format
    .catch(err => res.status(400).json("Error: " + err)); //felmeddelande om något går snätt
});

module.exports = router;
