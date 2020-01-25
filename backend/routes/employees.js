const router = require("express").Router();
let Employee = require("../models/employees.model");

router.route("/").get((req, res) => {
  Employee.find() //hittar alla employees på MongoDB-Atlas databasen
    .then(employees => res.json(employees)) //returnerar sedan employees i .json format
    .catch(err => res.status(400).json("Error: " + err)); //felmeddelande om något går snätt
});

//lägger till nya employees i databasen genom inmatning av data
router.route("/add").post((req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;

  const newEmployee = new Employee({
    id,
    name
  });

  newEmployee
    .save()
    .then(() => res.json(newEmployee))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
