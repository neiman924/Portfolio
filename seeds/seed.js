const sequelize = require('../config/connection');
const { User , Comment } = require('../models');

const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const comment = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
