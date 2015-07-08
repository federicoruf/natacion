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
  
  changeUserPassword: function(user) {
    console.log("entro");
    console.log(user._id);
    Accounts.setPassword(user._id, '1111');
    return user;
  }
});