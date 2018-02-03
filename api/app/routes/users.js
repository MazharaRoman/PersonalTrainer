const router = require('express').Router();
const Controller = require('../controllers/users');

router
    .route('/users')
    .get(Controller.index)
    .post(Controller.create)
    .put(Controller.update);

router
    .route('/users/:id')
    .get(Controller.get)
    .delete(Controller.remove);
    
module.exports = router;