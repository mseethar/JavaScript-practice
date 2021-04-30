const EventsEmitter = require('events');  // This is a class

const events = new EventsEmitter();

events.on('loggedMessage', (arg) => {  // on is an alias for events.addListener(''). Can be called arg, e, eventArg
    console.log(`Listener is called with ${arg}`);
});

// Event arguments
// There can be multiple arguments for events.
// But it is best to send the multiple arguments in an object instead.
events.emit('loggedMessage', 'message for Madhu');  