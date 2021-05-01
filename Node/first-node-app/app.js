
function sayHello(name) {
    console.log('Hello', name);
}

sayHello('Damn');
// For client side scripting the top level is window
// For node the top level is global
// Global objects
// console   global.console
// setTimeout() - Available in JS, not just in node global.setTimeout
// clearTimeout   - global.clearTimeout
// setInterval  - global.setInterval
// clearInterval  - global.clearInterval

// The following variable is scoped within this file
// Not outside of this file or global
var oneVar = 1;  // This variable is not added to the global. While in client-side scripting all the top level variable declarations are added to the window object

console.log(global.oneVar);   // This is undefined in node


// module property has information about the current module
// This is not a global property, though.
console.log(module);

for(let key in module) {
    console.log(key, module[key]);
}

// NOTE: Loading a module
// Load a module in a const always
// Use tools like JSHint - TODO
const logger = require('./logger'); // The logger module's exports object comes here!
console.log(logger);
//logger = 1;
logger.log('message');

// Path module
const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

// OS Module
const os = require('os');
let freeMemory = os.freemem();  // in bytes
let totalMemory = os.totalmem();

// INFO: Template String
console.log(`Total memory is ${totalMemory / 1024 /1204 /1024} GB`);
console.log(`Free memory is ${freeMemory / 1024 / 1024/ 1024} GB`);

// fs module
const fs = require('fs');

// Sync functions
let files = fs.readdirSync('.'); // Do not use sync functions
console.log(files);

fs.readdir('.', function(err, files) { // Always prefer Async methods.
    if (err) console.log('Error', err);
    else console.log('Files', files);
});


const Logger = require('./classLogger');
let log = new Logger();
log.on('messageLogged', (message) => {
    console.log('Caught an event notifying a message being logged', message);
});
log.log('Logging a message --> 1');

global.console.log('Logging with global.console.log');

// TODO: How to inject code in Javascript
// Aspect oriented programming