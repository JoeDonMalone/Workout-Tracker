const router = require("express").Router();
const db = require("../../models/workoutModel");

router.get(`/`, (req, res) => {
    db.find({})
    .sort({ date: -1 })
    .then(workouts => {
        console.log(workouts)
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/", ({ body }, res) => {
    db.Workout.create(body)
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/bulk", ({ body }, res) => {
    db.Workout.insertMany(body)
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.get(`/api/Workouts/:id`, (req, res) => {
//   db.Workout.findOne({ id:req.body.id} )
//     // .sort({ date: -1 })
//     .then(workouts => {
//       res.json(workouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });










// router.put(`/api/Workouts/:id`, (req, res) => {
//   db.Workout.findOne({ id:mongojs.ObjectId(req.params.id)} )
//     // .sort({ date: -1 })
//     .then(Workouts => {
//       res.json(Workouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/Workouts/:id", (req, res) => {
//   db.Workout.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         type: req.body.type,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });

module.exports = router;