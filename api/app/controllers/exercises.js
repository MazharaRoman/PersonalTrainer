
class Exercise {

    index(req, res, next) {
        res.send('all exercises!');
    }

    get(req, res, next) {
        res.send('exercise by id!');
    }
}

module.exports = new Exercise();