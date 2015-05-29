/*var onCreateUserHook = null;
*/

/*Accounts.onCreateUser(function(options, user) {
  console.log('11111111111111' + user._id);
  user.profile = options.profile || {};
  Roles.addUsersToRoles(user._id, 'director'); 
  
  /*if (_.has(options, 'director')) {
    console.log('22222222222222');
    Roles.addUserToRoles(user._id, options.role);
  return user;
/*  console.log("entra, hago lo q quiero");
  //console.log(user._id);
  console.log(user.username);
  console.log(user.dexterity);
  console.log(user.password);
  console.log("aca no llega");
  var idUser = Accounts.createUser({
    username: user.username,
  });  
  var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
  user.dexterity = d6() + d6() + d6();
  
  if (options.profile)
    user.profile = options.profile;
  Roles.addUsersToRoles(idUser, ['director']);
  return user;
});

Accounts.onCreateUser = _.wrap(Accounts.onCreateUser, function(onCreateUser) {

    // Store the original arguments
    var args = _.toArray(arguments).slice(1),
        user = args[0];
        origCallback = args[1];
    console.log('dddddddddddddddddddddd');
    var newCallback = function(error) {
        // do my stuff
        console.log(Roles);
        console.log(user);
        origCallback.call(this, error);
    };

    createUser(user, newCallback);
});
Accounts.validateNewUser (function (user) {
  console.log("id " + user._id);
  console.log("name: " + user.username);
  console.log("el usuario esta en el rol? " + Roles.userIsInRole(user, 'director'));
  
  console.log(Roles.getRolesForUser());
  console.log(Roles.addUsersToRoles(user._id, 'directoasasar')); 
  
  console.log("el usuario esta en el rol? " + Roles.userIsInRole(user, 'director'));
  console.log()
  return true;
});





// Validate username, sending a specific error message on failure.
Accounts.validateNewUser(function (user) {
  if (user.username && user.username.length >= 3)
    return true;
  throw new Meteor.Error(403, "Username must have at least 3 characters");
});
// Validate username, without a specific error message.
Accounts.validateNewUser(function (user) {
  return user.username !== "root";
});
*/