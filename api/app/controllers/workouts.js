"use strict";
const Workout = require('../models/workout');
const logger = require('../../util/logger')

class WorkoutsController {

    async index(req, res, next) {
        try {
            res.json(await Workout.all());
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        const id = req.params.id;
        try {
            const workout = await Workout.getById(id);
            workout ? res.json(workout) : res.sendStatus(404);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try  {
            const workout = req.body.exercise;
            res.json(await Workout.create(workout));
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const workout = req.body.workout;
            res.json(await Workout.update(workout));
        } catch (e) {
            next(e);
        }
    }
    async remove(req, res, next) {
        try {
            const id = req.params.id;
            await Workout.remove(id);
            res.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

}

module.exports = new WorkoutsController();