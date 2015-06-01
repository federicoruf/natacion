Meteor.methods({
  updateEnable: function(userAttributes){
    check(userAttributes, {
      _id: String,
      username: String,
      createdAt: Date,
      profile: Object,
      services: Object
    });
    var userId = Meteor.users.update(userAttributes._id, userAttributes);
    return {
      _id: userId
    };
  }
});