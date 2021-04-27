const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

router.get("/excercise", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;