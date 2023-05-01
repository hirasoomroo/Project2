const router = require("express").Router();

const Trails = require("../../models/trails");

const useroutes = require('./useroutes');
const ratingroutes = require('./ratingroutes');
const trailsroutes = require('./trailsroutes');


router.use('/users', useroutes);
router.use('/rating', ratingroutes); 
router.use('/trails', trailsroutes);

module.exports = router;