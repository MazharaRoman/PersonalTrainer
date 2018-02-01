const Exercise = require('../models/exercise')

class ExerciseController {

    async index(req, res, next) {
        try {
            res.json(await Exercise.all());
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        const id = req.params.id;
        try {
            const exercise = await Exercise.getById(id);
            exercise ? res.json(exercise) : res.sendStatus(404);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {

    }

    async update(req, res, next) {

    }
    async remove(req, res, next) {

    }

}

module.exports = new ExerciseController();