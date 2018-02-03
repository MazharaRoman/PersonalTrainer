const mongoose = require('../../util/db.connection');

const model = {
    name: String,
    email: String,
}

const User = mongoose.model('User', model);

class UserModel {

    /**
     * return all exercises
     * @returns {promise}
     */
    all() {
        return User.find()
    }

    /**
     * return workout by _id
     * @param {User._id}
     * @returns {Promise}
     */
    getById(id) {
        return User.findById(id);
    }

    /**
     * @param {User}
     * @returns {Promise}
     */
    create(user) {
        return User.create(user);
    }

    /**
     * @param {User}
     * @returns {Promise} updated value
     */
    update(user) {
        return User.findOneAndUpdate(user._id, {$set:{...user}}, {new:true});
    }

    /**
     * @param {User._id}
     * @returns {Promise}
     */
    remove(id) {
        return User.findByIdAndRemove(id);
    }

}

module.exports = new UserModel();

