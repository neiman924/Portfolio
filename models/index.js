const Comment = require('./Comment');
const User = require('./user');

User.hasMany(Comment, {});
  
Comment.belongsTo(User, {});

module.exports = { Comment , User};
