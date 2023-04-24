const User = require("./user");
const Trails = require("./trails");
const Rating = require("./rating");

User.belongsToMany(Trails, {
  through: Rating,
  foreignKey: "user_id",
  as: "planned_Hikes",
});

Trails.belongsToMany(User, {
  through: Rating,
  foreignKey: "hiking_id",
  as: "Trails_location",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
  
});

module.exports = { User, Trails, Rating};