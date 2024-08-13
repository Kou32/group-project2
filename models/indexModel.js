const User = require('./User');
const Discussion = require('./Discussion');
const Movie = require('./Movie');
const Comment = require('./Comment');

Movie.hasMany(Discussion, {
    foreignKey: 'movie_id',
    onDelete: 'CASCADE'
});

Discussion.hasMany(Comment, {
    foreignKey: 'discussion_id',
    onDelete: 'CASCADE'
});

User.belongsTo(Comment, {
    foreignKey: 'user_id',
});

module.exports = { Movie, Discussion, User };