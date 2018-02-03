"use strict";
const User = require('../models/user');
const logger = require('../../util/logger')

class UsersController {

    async index(req, res, next) {
        try {
            res.json(await User.all());
        } catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        const id = req.params.id;
        try {
            const user = await User.getById(id);
            user ? res.json(user) : res.sendStatus(404);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try  {
            const user = req.body.user;
            res.json(await User.create(user));
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const user = req.body.user;
            res.json(await User.update(user));
        } catch (e) {
            next(e);
        }
    }
    async remove(req, res, next) {
        try {
            const id = req.params.id;
            await User.remove(id);
            res.sendStatus(204);
        } catch(e) {
            next(e);
        }
    }

}

module.exports = new UsersController();