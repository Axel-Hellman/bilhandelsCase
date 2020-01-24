const router = require("express").Router();
let Carmodel = require("../models/carmodels.model");

router.route("/").get((req, res) => {
  Carmodel.find() //hittar alla bilmodeller på MongoDB-Atlas databasen
    .then(carmodels => res.json(carmodels)) //returnerar sedan bilmodeller i .json format
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const id = Number(req.body.id);
  const brand = req.body.brand;
  const model = req.body.model;
  const price = Number(req.body.price);

  const newCarmodel = new Carmodel({
    id,
    brand,
    model,
    price
  });

  newCarmodel
    .save()
    .then(() => res.json(newCarmodel))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Carmodel.findById(req.params.id)
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Carmodel.findById(req.params.id)
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));

  Carmodel.findByIdAndDelete(req.params.id).catch(err =>
    res.status(400).json("Error: " + err)
  );
});

module.exports = router;
