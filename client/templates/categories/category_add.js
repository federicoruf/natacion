Template.categoryAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    var category = {
      name: e.target.name.value,
      yearStart: parseInt(e.target.yearStart.value),
      yearFinish: parseInt(e.target.yearFinish.value)
    };
    var errors = categoryValidator(category);
    if(errors.name || errors.yearStart || errors.yearFinish){
      return Session.set('categoryAddErrors', errors);
    }else{
      Meteor.call('categoryInsert', category, function(error, result){
        if(error){
          return alert(error.reason);
        }else{
          if(result.categoryExists){
            console.log("ya existe la categoríaaa");
            errors.name = "La categoría ya existe";
            return Session.set('categoryAddErrors', errors);
          }else{
            Router.go('categoryAdministration');
          }
        }
      });
    }
  }
});

Template.categoryAdd.created = function(){
  Session.set('categoryAddErrors', {});
};

Template.categoryAdd.helpers({
  errorMessage: function(field){
    return Session.get('categoryAddErrors')[field];
  },
  errorClass: function(field){
    return !!Session.get('categoryAddErrors')[field] ? 'has-error' : '';
  }
});

