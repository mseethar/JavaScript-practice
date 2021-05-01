const EventsEmitter = require('events');

class Logger extends EventsEmitter { // class is a syntactic sugar in ES6 for constructor functions
    log(message) { // No function keyword is required
        console.log(message);
        this.emit("messageLogged", message);
    }
}

module.exports = Logger;