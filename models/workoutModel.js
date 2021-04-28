const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now() },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of Workout - Cardio or Resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of the Workout"
            },
            weight: {
                type: Number,
                trim: true,
                required: false
            },
            sets: {
                type: Number,
                trim: true,
                required: false
            },
            reps: {
                type: Number,
                trim: true,
                required: false
            },
            duration: {
                type: Number,
                trim: true,
                required: "Please enter the amount of time take to complete the workout"
            },
            // should be able to add this distance specificaly to an instance of a cardio workout. it need not be applied to all documents
            distance: {
                type: Number,
                trim: true,
                required: false
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

// let workoutSeed = [
//     {
//         day: new Date().setDate(new Date().getDate() - 10),
//         exercises: [
//             {
//                 type: "resistance",
//                 name: "Bicep Curl",
//                 duration: 20,
//                 weight: 100,
//                 reps: 10,
//                 sets: 4
//             }
//         ]
//     }