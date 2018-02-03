const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:3333/personalTrainer');

module.exports = mongoose;