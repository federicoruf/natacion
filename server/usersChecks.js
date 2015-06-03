Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};
  user.profile.enable = true;  
  console.log(user._id);
  console.log(user);
  user.roles = ['visitor'];
  return user;
});

//Si no se encuentra habilitado el usuario lo redirige a una pañgina especial
Accounts.validateLoginAttempt(function(info) {
    var user = info.user;
    if (!user.profile.enable) { 
      throw new Meteor.Error(403, 'Su cuenta esta deshabilitada');
    }
    return true;
});
