const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of the Workout",
        validate: [({ length }) => length >= 1]
    },
    type: {

    },
    weight: {

    },
    sets: {

    },
    reps: {

    },
    duration: {

    },
    distance: {

    } 
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;