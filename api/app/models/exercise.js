const mongoose = require('../../util/db.connection');

const model = {
    title: String,
    description: String,
}

const Exercise = mongoose.model('Exercise', model);

class ExerciseModel {

    /**
     * return all exercises
     * @returns {promise}
     */
    all() {
        return Exercise.find()
    }

    /**
     * return exercise by _id
     * @param {Exercise._id} id 
     * @returns {Promise}
     */
    getById(id) {
        return Exercise.findById(id);
    }

    /**
     * @param {Exercise} exercise
     * @returns {Promise}
     */
    create(exercise) {
        return Exercise.create(exercise);
    }

    /**
     * @param {Exercise}
     * @returns {Promise}
     */
    update(exercise) {
        return Exercise.findOneAndUpdate(exercise._id, {$set:{...exercise}}, {new:true});
    }

    /**
     * @param {Exercise._id}
     * @returns {Promise}
     */
    remove(id) {
        return Exercise.findByIdAndRemove(id);
    }

}

module.exports = new ExerciseModel();

