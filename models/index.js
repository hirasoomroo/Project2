const User = require("./user");
const Trails = require("./trails");
const Rating = require("./rating");

User.hasOne(Rating,{
  foreignKey:"user_id"
  },
);

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


module.exports = { User, Trails, Rating};