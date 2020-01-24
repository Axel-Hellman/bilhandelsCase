const router = require("express").Router();
let Sale = require("../models/sales.model");
let Employee = require("../models/employees.model");
let Carmodel = require("../models/carmodels.model");

router.route("/total_sales").get((req, res) => {});

module.exports = router;
