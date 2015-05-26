Template.categoryEdit.created = function() {
  Session.set('categoryEditErrors', {});
};


Template.categoryEdit.helpers({
  errorMessage: function(field) {
    return Session.get('categoryEditErrors')[field];
  },

  errorClass: function(field) {
    return !!Session.get('categoryEditErrors')[field] ? 'has-error': '';  
  }
});


Template.categoryEdit.events({
  'submit form': function(e){
    e.preventDefault();
    var categoryProperties = {
      _id: this._id,
      name: e.target.name.value,
      yearStart: parseInt(e.target.yearStart.value),
      yearFinish: parseInt(e.target.yearFinish.value)
    };
    var errors = categoryValidator(categoryProperties);
    if (errors.name || errors.yearStart || errors.yearFinish) {
      return Session.set('categoryAddErrors', errors);
    } else {
      Meteor.call('categoryUpdate', categoryProperties, function(error, result) {
        console.log("actualiza categoría");
        if (error) {
          return alert(error.reason);
        } else {
          if (result.categoryExists){
            errors.dni = "La categoría ya existe";
          } else {
            Router.go('categoryAdministration'); 
          }
        }
      });
    }
  },

  'click .delete': function(e) {
    e.preventDefault();
    if(confirm("Seguro de eliminar la categoría?")){
      var currentCategoryId = this._id;
      Categories.remove(currentCategoryId);
      Router.go('categoryAdministration');
    }
  }
});