const sequelize = require('../config/connection');
const { Rating, Trails, User} = require('../models');

const hikingSeedData = require('./hikingSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await user.bulkCreate(hikingSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  // Create hikes at random
  for (let i = 0; i < 10; i++) {
    // Get a random user's `id`
    const { id: randomuserId } = user[
      Math.floor(Math.random() * user.length)
    ];

    // Get a random location's `id`
    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];

    
    await hike.create({
      user_id: randomuserId,
      location_id: randomLocationId
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `user.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
