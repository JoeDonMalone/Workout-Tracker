const router = require("express").Router();
let db = require("../../models");
// .find({})
router.get(`/`, (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' }
      }
    }
  ])
    .sort({ date: -1 })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", ({ body }, res) => {
  // 
  db.Workout.create(body)
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets
        }
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log("Updated Workout", data)
        res.json(data);
      }
    }
  );
});

// router.post("/bulk", ({ body }, res) => {
//   db.Workout.insertMany(body)
//     .then(workouts => {
//       res.json(workouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get('/range', async (req, res) => {
  await db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' }
      }
    }
  ])
    .then(ranges => {
      console.log(ranges)
      res.json(ranges);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;