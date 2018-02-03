const router = require('express').Router();
const Controller = require('../controllers/workouts');

router
    .route('/workouts')
    .get(Controller.index)
    .post(Controller.create)
    .put(Controller.update);

router
    .route('/workouts/:id')
    .get(Controller.get)
    .delete(Controller.remove);

module.exports = router;