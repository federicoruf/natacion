Accounts.onCreateUser(function(options, user) {
  console.log('11111111111111' + user._id);
  user.profile = options.profile || {};
  user.profile.enable = true;  
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
