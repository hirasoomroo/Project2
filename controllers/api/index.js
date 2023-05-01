const router = require("express").Router();

const Trails = require("../../models/trails");

const ratingroutes = require('./ratingroutes');
const trailsroutes = require('./trailsroutes');


router.use('/rating', ratingroutes); 
router.use('/trails', trailsroutes);

module.exports = router;