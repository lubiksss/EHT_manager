var express = require('express');
var router = express.Router();
const movies = require('../data/movies')

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.send('hello world!')
    res.json(movies);
});
router.get('/:id', function (req, res) {
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter(function (movie) {
        return movie.id === id;
    });
    res.json(movie);
});

module.exports = router;
