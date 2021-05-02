// Enable debugging index namesapce $Env:DEBUG = "app:startup"
// $Env:DEBUG = "app:startup,db" or export DEBUG=app:startup,db
// Logs from namespaces set in the above DEBUG environment variable will be logged.
// Logs from other namespaces will be suppressed.
const debug = require('debug')('app:startup'); // Returns a function that can log in the index namespace.
const dbDebugger = require('debug')('db');
// Don't have to create multiple debuggers in a module file.

const express = require('express');
const app = express();
const helmet = require('helmet');
const config = require('config');
app.use(helmet());  // TODO: Learn about helmet middleware. Adds a bunch of security headers
app.use(express.json()); // This is built-in a middleware that parses the request body into a JSON object
app.set('view engine', 'pug');  // Set the view templates
app.set('views', './views');  // Path to the view templates

// INFO: Knowing the running environment
console.log(`NODE_ENV from process.env ${process.env.NODE_ENV}`);
console.log(`Node environment from app: ${app.get('env')}`)
console.log(`Application Name: ${config.get('name')}`)
console.log(`Mail server: ${config.get('mail.server')}`)
console.log(`Mail server password: ${config.get('mail.password')}`)

if (app.get('env') === 'development') {
    const morgan = require('morgan');
    app.use(morgan('common'));  // tiny
    console.log('Enabling Morgan...');
    debug('Enabling Morgan...');
} else {
    console.log('Morgan is not enabled');
    debug('Morgan is not enabled');
}

dbDebugger('Connecting to database');

const logger = require('./middleware/logger');
// Custom middleware
app.use(logger);

const auth = require('./middleware/authenticator');
app.use(auth);

app.use(express.urlencoded({ extended: true }));  // Parses URL encoded form POSTs
app.use(express.static('./public'));  // Built-in middleware

// WARN: The middlewares are called in the order they are added to the express app.
// So, if we add a middleware that terminates the request processing cycle then
// we will not see further middlewares added in the pipeline called.
// Routes for courses are defined in a separate module. Load it.
// This module exports a router object.
const courses = require('./routes/courses');
app.use(courses.basePath, courses.router);  // Register the module for all routes for /api/courses

const home = require('./routes/home');
app.use('/', home);

const port = process.env.PORT || 3033;
app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
});
