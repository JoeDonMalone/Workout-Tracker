const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
})

const Exercises = mongoose.model("Exercises", ExerciseSchema);
module.exports = Exercises;