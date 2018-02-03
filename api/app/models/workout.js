const mongoose = require('../../util/db.connection');

const model = {
    title: String,
    description: String,
}

const Workout = mongoose.model('Workout', model);

class WorkoutModel {

    /**
     * return all exercises
     * @returns {promise}
     */
    all() {
        return Workout.find()
    }

    /**
     * return workout by _id
     * @param {Workout._id}
     * @returns {Promise}
     */
    getById(id) {
        return Workout.findById(id);
    }

    /**
     * @param {Workout}
     * @returns {Promise}
     */
    create(workout) {
        return Workout.create(workout);
    }

    /**
     * @param {Workout}
     * @returns {Promise} updated value
     */
    update(workout) {
        return Workout.findOneAndUpdate(workout._id, {$set:{...workout}}, {new:true});
    }

    /**
     * @param {Workout._id}
     * @returns {Promise}
     */
    remove(id) {
        return Workout.findByIdAndRemove(id);
    }

}

module.exports = new WorkoutModel();

