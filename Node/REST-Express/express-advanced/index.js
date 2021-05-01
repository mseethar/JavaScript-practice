// Enable debugging index namesapce $Env:DEBUG = "index"
// $Env:DEBUG = "index,db"
const indexDebugger = require('debug')('index'); // Returns a function that can log in the index namespace.
const dbDebugger = require('debug')('db');
const express = require('express');
const app = express();
const helmet = require('helmet');
const config = require('config');
app.use(helmet());  // TODO: Learn about helmet middleware. Adds a bunch of security headers
app.use(express.json()); // This is built-in a middleware that parses the request body into a JSON object

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
    indexDebugger('Enabling Morgan...');
} else {
    console.log('Morgan is not enabled');
    indexDebugger('Morgan is not enabled');
}

dbDebugger('Connecting to database');

const logger = require('./logger');
// Custom middleware
app.use(logger);

const auth = require('./authenticator');
app.use(auth);

app.use(express.urlencoded({ extended: true }));  // Parses URL encoded form POSTs
app.use(express.static('./public'));  // Built-in middleware

app.get('/', (req, res) => {
    res.send({ response: 'success'});
});

const port = process.env.PORT || 3033;
app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
});
