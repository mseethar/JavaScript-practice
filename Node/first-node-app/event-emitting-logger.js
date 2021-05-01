const EventsEmitter = require('events');

class EventsEmittingLogger extends EventsEmitter {
    log(message) {
        console.log('Logging', message);
        this.emit('messageLogged', {msg: message});
    }
}

module.exports = EventsEmittingLogger;

