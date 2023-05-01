const router = require('express').Router();
const trails = require('../../models/trails');

// route to create/add a trail
router.post('/', async (req, res) => {
  try {
    const trailData = await trails.create({
      trail_name: req.body.trails_name,
      description: req.body.description,
      user_name: req.body.user_name,

    });
    res.status(200).json(trailData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  
  // It is sending the data to the Model so that one trails can be updated with new data in the database.
  try {
    const trails = await trails.update(
      {
        trail_name: req.body.trail_name,
        description: req.body.description,
        user_name: req.body.user_name,
        
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    // The updated data (trail) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(trails);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
