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

// workoutSchema.methods.getTotals = function() {
    
    
  
//     return this.fullName;
//   };


const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;




    // exercises: [
    //     {
    //         type: String,
    //         name: String,
    //         weight: Number,
    //         sets: Number,
    //         reps: Number,
    //         duration: Number,
    //         distance: Number
    //     }
    // ]

// const workoutSchema = new Schema({
//     day: { type: Date, default: Date.now() },
//     exercises: [
//         {
//             type: {
//                 type: String,
//                 trim: true,
//                 required: "Please enter the type of Workout - Cardio or Resistance"
//             },
//             name: {
//                 type: String,
//                 trim: true,
//                 required: "Please enter the name of the Workout"
//             },
//             weight: {
//                 type: Number,
//                 trim: true,
//                 required: false
//             },
//             sets: {
//                 type: Number,
//                 trim: true,
//                 required: false
//             },
//             reps: {
//                 type: Number,
//                 trim: true,
//                 required: false
//             },
//             duration: {
//                 type: Number,
//                 trim: true,
//                 required: "Please enter the amount of time take to complete the workout"
//             },
//             // should be able to add this distance specificaly to an instance of a cardio workout. it need not be applied to all documents
//             distance: {
//                 type: Number,
//                 trim: true,
//                 required: false
//             }
//         }
//     ]
// });