"use strict";
const Exercise = require('../models/exercise');
const logger = require('../../util/logger')

class ExercisesController {

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
        try  {
            const exercise = req.body.exercise;
            res.json(await Exercise.create(exercise));
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const exercise = req.body.exercise;
            res.json(await Exercise.update(exercise));
        } catch (e) {
            next(e);
        }
    }
    async remove(req, res, next) {
        try {
            const id = req.params.id;
            await Exercise.remove(id);
            res.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

}

module.exports = new ExercisesController();