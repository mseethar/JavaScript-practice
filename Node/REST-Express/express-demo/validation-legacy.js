const express = require('express');
const app = express();

app.post('/api/blogs', (req, res) => {
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send({ error: 'Blog name is mandatory and should be at least 3 characters long!'});
    } else {
        res.status(201).send({ status: 'CREATED' });
    }
});