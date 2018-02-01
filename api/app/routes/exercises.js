const router = require('express').Router();
const Controller = require('../controllers/exercises');

router
    .route('/exercises')
    .get(Controller.index)
    .post(Controller.create);

router
    .route('/exercises/:id')
    .get(Controller.get)
    .put(Controller.update)
    .delete(Controller.remove);
module.exports = router;