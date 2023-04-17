const Rating = require("./rating");
const Trails = require("./trails");
const User = require("./user");

Rating.belongsToMany(Trails, {
  // Define the third table needed to store the foreign keys
  through: {
    model: User,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "planned_Hikes",
});

Trails.belongsToMany(Rating, {
  // Define the third table needed to store the foreign keys
  through: {
    model: User,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "Trails_location",
});

module.exports = { Rating, Trails, User };