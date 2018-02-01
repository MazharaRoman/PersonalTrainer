const mongoose = require('../../config/db.connection');

const model = {
    title: String,
    description: String,
}

const Exercise = mongoose.model('Exercise', model);

class ExerciseModel {
    all() {
        return Exercise.find()
    }
    getById(id) {
        return Exercise.findById(id);
    }

}

module.exports = new ExerciseModel();

