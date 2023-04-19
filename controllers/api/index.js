const router = require("express").Router();

const Trails = require("../../models/trails");

const ratingroutes = require('./ratingroutes');
const trailsroutes = require('./trailsroutes');


router.use('/rating', ratingroutes); // where /rating is simply the name of the route you see on the url
router.use('/trails', trailsroutes);

module.exports = router;