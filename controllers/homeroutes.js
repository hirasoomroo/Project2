const router = require('express').Router();
const { Rating, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all ratings and JOIN with user data
    const ratingData = await Rating.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const ratings = ratingData.map((rating) => rating.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      ratings, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports= router;
