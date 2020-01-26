const router = require("express").Router();
let User = require("../models/users.model");

//lägger till nya users i databasen genom inmatning av data
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username,
    password
  });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
