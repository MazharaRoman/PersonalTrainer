class Logger {

    /**
     * 
     * @param {String} message 
     */
    info(message) {
        return console.log(message);
    }
    /**
     * @param {{message: string}} error
    */
    error(error) {
        console.error(error.message);
    }
}

module.exports = new Logger();