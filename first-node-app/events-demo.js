const EventsEmitter = require('events');

const emitter = new EventsEmitter();

emitter.on('onMessageLogged', (arg) => {
    console.log('onMessageLogged event received', arg);
});

emitter.emit('onMessageLogged', { message: 'Damn', level: 'WARN'}); // Best practice: Use an object rather than using an array!

const EventsEmittingLogger = require('./event-emitting-logger');

const log = new EventsEmittingLogger();

log.on('messageLogged', (arg) => {
    console.log('event received from async logger', arg);
});

log.log('Damn');


