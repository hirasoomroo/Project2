const router = require("express").Router();

const Trails = require("../../models/trails");

const userroutes = require('./userroutes');
const ratingroutes = require('./ratingroutes');
const trailsroutes = require('./trailsroutes');


router.use('/users', userroutes);
router.use('/rating', ratingroutes); 
router.use('/trails', trailsroutes);

module.exports = router;