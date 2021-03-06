const router = require('express').Router();
const Controller = require('../controllers/exercises');

router
    .route('/exercises')
    .get(Controller.index)
    .post(Controller.create)
    .put(Controller.update);

router
    .route('/exercises/:id')
    .get(Controller.get)
    .delete(Controller.remove);
    
module.exports = router;