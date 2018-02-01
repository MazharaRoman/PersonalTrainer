const Exercise = require('../models/exercise')

class ExerciseController {

    index(req, res, next) {
        Exercise.all().then((exercise) => {
            // console.log(res);
            // setTimeout(() => {
            res.json(exercise);
            // }, 1000);
            // next();
        })
            .catch(err => res.json(err));
    }

    get(req, res, next) {
        res.send('exercise by id!');
    }


}

module.exports = new ExerciseController();