const router = require("express").Router();
let Sale = require("../models/sales.model");
let Employee = require("../models/employees.model");
let Carmodel = require("../models/carmodels.model");

router.route("/total_sales").get((req, res) => {}); // används ej: skulle blivigt grunden för GET /total_sales

//lägger till nya sales i databasen genom inmatning av data
router.route("/add").post((req, res) => {
  const id = Number(req.body.id);
  const employee_id = Number(req.body.employee_id);
  const carmodel_id = Number(req.body.carmodel_id);

  const newSale = new Sale({
    id,
    employee_id,
    carmodel_id
  });

  newSale
    .save()
    .then(() => res.json(newSale))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
