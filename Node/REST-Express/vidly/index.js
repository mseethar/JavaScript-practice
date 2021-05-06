const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vidly');

const express = require('express');  // This is a function
const app = express();
app.use(express.json());
const genres = require('./routes/genres');
app.use('/api/genres', genres);
const customers = require('./routes/customers');
app.use('/api/customers', customers);

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
