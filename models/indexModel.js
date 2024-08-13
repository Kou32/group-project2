const Movie = require('./movieModel')
const Discussion = require('./discussionModel')
const User = require('./userModel');

Movie.hasMany(Discussion, {
    foreignKey: 'movie_id',
  });
  
Discussion.belongsTo(Movie, {
    foreignKey: 'movie_id',
  });
  
  module.exports = { User, Movie, Discussion };