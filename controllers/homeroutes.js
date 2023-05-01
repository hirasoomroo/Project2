const router = require('express').Router();
const { Rating, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
  res.render('login');
});


module.exports= router;