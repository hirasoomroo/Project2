const router = require('express').Router();
const { Rating } = require('./models');


//get comments
router.get('/', (req, res) => {
    Rating.findAll({})
    .then(dbRatingData =>res.json(dbRatingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}
)