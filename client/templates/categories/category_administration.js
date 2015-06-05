Template.categoryAdministration.helpers({
  category: function() {
    return Categories.find();
  }
});


Template.categoryAdministration.events({
  "click .upYear": function () {
    var categories = Categories.find().fetch();
    categories.forEach(function (category) {
      category.yearStart++; 
      category.yearFinish++; 
      Meteor.call('yearsUpdate', category, function(error, result) {
        if (error) {
          return alert(error.reason);
        } 
      });
    });
  },
  
  "click .downYear": function () {
    var categories = Categories.find().fetch();
    categories.forEach(function (category){
      category.yearStart--;
      category.yearFinish--; 
      Meteor.call('yearsUpdate', category, function(error, result) {
        if (error) {
        return alert(error.reason);
        } 
      });
    });
  }
});

