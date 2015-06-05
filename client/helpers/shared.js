//LIBRERÍA DE HELPERS COMPARTIDOS POR TODOS LOS TEMPLATES

Template.registerHelper('isDirectororAssistant', function() {
  var currentUser = Meteor.user();
  if (Roles.userIsInRole(currentUser, 'director') || Roles.userIsInRole(currentUser, 'assistantDirector')) {
    return true;  
  }
  return false;
  });