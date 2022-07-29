const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Comment, {});
  
Comment.belongsTo(User, {});

module.exports = { Comment , User};
