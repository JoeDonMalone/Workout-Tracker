const mongoose = require("mongoose");
const Exercises  = require("./Exercise");

const workoutSchema = new mongoose.Schema({
    day: { type: Date, default: Date.now() },
    exercises: [
        {
            type: Array,
            ref: 'Excercise'
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;