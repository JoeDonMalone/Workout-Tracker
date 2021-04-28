const router = require("express").Router();
const path = require("path");

// const Workout = require("../models/workoutModel.js");


router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;