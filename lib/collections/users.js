Meteor.methods({
  updateAttributes: function(userAttributes) {
    check(userAttributes, {
      _id: String,
      username: String,
      createdAt: Date,
      profile: Object,
      services: Object,
      roles: Array
    });
    var userId = Meteor.users.update(userAttributes._id, userAttributes);
    return {
      _id: userId
    };
  },
});