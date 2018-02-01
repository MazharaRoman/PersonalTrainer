const mongoose = require('../../config/db.connection');

const model = {
    title: String,
    description: String,

}

const Exercise = mongoose.model('Exercise', model)

module.exports = Exercise;

