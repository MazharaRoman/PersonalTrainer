const express = require('express');
const router = express.Router();

/* GET users listing. */
router.route('/users')
.get( function(req, res, next) {
  res.send('respond with a resource users');
});

module.exports = router;
