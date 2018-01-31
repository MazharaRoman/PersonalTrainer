const router = require('express').Router();
const Controller = require('../controllers/exercises');

router
    .route('exercises/:id')
    .get(Controller.index)
    .get(Controller.get)
    .post(Controller.create)
    .put(Controller.update)
    .delete(Controller.remove);