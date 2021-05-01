const express = require('express');  // This is a function
const app = express();

const genres = ['Drama', 'Horror', 'Thriller']
app.get('/api/genres', (req, res) => {  // Routing handler
    res.send({ items: genres, size: genres.length });
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});