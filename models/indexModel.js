<<<<<<< HEAD
=======

const Discussion = require('./discussionModel')
const User = require('./userModel');
const Comment = require('./commentModel')
const ChatRoom = require('./chatRoomModel')


User.hasMany(Discussion, {
  foreignKey: 'User_id'
});

Discussion.belongsToMany(User, {
  foreignKey: 'User_id'
});

Discussion.belongsToMany(Comment,{
    through: {
      model: ChatRoom,
      unique: false
    },
    as: 'Discussions_to_Movies'
  })
  
Comment.belongsToMany(Discussion,{
    through: {
      model: ChatRoom,
      unique: false
    },
    as: 'Comments_To_Discussions'
  })

  module.exports = { User, Discussion, ChatRoom, Comment };
>>>>>>> c2506c449b4e0eaa2268d6d77ecb6f3d34fd6489
