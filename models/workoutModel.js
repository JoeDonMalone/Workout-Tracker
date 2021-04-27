const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please enter the type of Workout - Cardio or Resistance",

    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of the Workout",
    },
    weight: {
        type: String,
        trim: true,
        required: "Please enter the amount of weight moved",

    },
    sets: {
        type: String,
        trim: true,
        required: "Please enter the number of sets in completed in the workout",

    },
    reps: {
        type: String,
        trim: true,
        required: "Please enter the number of reps per set",
    },
    duration: {
        type: String,
        trim: true,
        required: "Please enter the amount of time take to complete the workout",
    },
    // should be able to add this distance specificaly to an instance of a cardio workout. it need not be applied to all documents
    distance: {
        type: String,
        trim: true,
        required: false,
    } 
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;