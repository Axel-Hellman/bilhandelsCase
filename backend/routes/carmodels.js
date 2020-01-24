const router = require("express").Router();
let Carmodel = require("../models/carmodels.model");

//hittar alla carmodels från MongoDB-Atlas databasen, returnerar sedan i .json format
router.route("/").get((req, res) => {
  Carmodel.find()
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));
});

//Skapar ny carmodel: samlar först all data som behövs, skapar en ny bilmodell och sparar den i databasen
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

//Hittar en bilmodell med hjälp av mongoDBs automatiskt genererade, unika, "_id" och returnerar den
router.route("/:id").get((req, res) => {
  Carmodel.findById(req.params.id)
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));
});

//Hittar först en bilmodell med hjälp av mongoDBs automatiskt genererade, unika, "_id" och returnerar den
//Raderar sedan samma bilmodell
router.route("/:id").delete((req, res) => {
  Carmodel.findById(req.params.id)
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));

  Carmodel.findByIdAndDelete(req.params.id).catch(err =>
    res.status(400).json("Error: " + err)
  );
});

module.exports = router;
