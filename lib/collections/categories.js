Categories = new Mongo.Collection('categories');


Meteor.methods({
  yearsUpdate:  function(categoryAttributes) {
    check(categoryAttributes,{
      _id: String,
      name: String,
      yearStart: Number,
      yearFinish: Number
    });
    var categoryId = Categories.update(categoryAttributes._id, categoryAttributes);
    return {
      _id: categoryId
    }
  },
  
  categoryUpdate: function(categoryAttributes) {
    check (categoryAttributes, {
      _id: String,
      name: String,
      yearStart: Number,
      yearFinish: Number
    });
    var result = categoríaExistente(categoryAttributes.name);
    if(result.categoryExists & result._id != categoryAttributes._id){
      console.log("ya existe la categoría");
      return result;
    }
    var categoryId = Categories.update(categoryAttributes._id, categoryAttributes);
    return {
      _id: categoryId
    };
  },
  
  categoryInsert: function(categoryAttributes) {
    check(categoryAttributes,{
      name: String,
      yearStart: Number,
      yearFinish: Number
    });
    var errors = categoryValidator(categoryAttributes);
    if(errors.name || errors.yearStart || errors.yearFinish){
      throw new Meteor.Error('invalid-category', "Setee correctamente los campos");
    }
    var result = categoríaExistente(categoryAttributes.name);
    if(result.categoryExists & result._id != categoryAttributes._id){
      console.log("ya existe la categoría");
      return result;
    }
    var categoryId = Categories.insert(categoryAttributes);
    return {
      _id: categoryId
    };
  }
});


categoríaExistente = function(name){
  console.log("entra categoria existente");
  var categoryExists = Categories.findOne({name: name});
  if(categoryExists){
    return{
      categoryExists: true,
      _id: categoryExists._id
    }
  }
  return{ categoryExists: false };
}


categoryValidator = function (category){
  var errors = {};
  if(!category.name) 
    errors.name = "Por favor ingrese el nombre de la categoria";
  if(!category.yearStart) 
    errors.yearStart = "Por favor ingrese el año de comienzo";
  if(!category.yearFinish) 
    errors.yearFinish = "Por favor ingrese el año de finalización";
  if(category.yearFinish <= category.yearStart){
    errors.yearFinish = "La fecha de inicio debe ser menor a la fecha de finalización";
    errors.yearStart = "La fecha de inicio debe ser menor a la fecha de finalización";
  }
  return errors;
};


Categories.allow({
    update: function(categoryId, category) { return true; },
    remove: function(categoryId, category) { return true; },
});