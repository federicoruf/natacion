Template.swimmerArrive.created = function() {
  Session.set('swimmerArriveEditErrors', {});
};


Template.swimmerArrive.helpers({
  errorMessage: function(field) {
    return Session.get('swimmerArriveEditErrors')[field];
  },

  errorClass: function(field) {
    return !!Session.get('swimmerArriveEditErrors')[field] ? 'has-error': '';  
  },

  user: function() {
    return OrdenDeLlegada.find();
  }  
});

//la tabla de orden de llegada va a tener un unico elemento q va a ser la posición y va a extender a la tabla del nadador
Template.swimmerArrive.events({
  'submit form': function(e) {
    e.preventDefault();
    //tengo q ir a buscar a la tabla de nadadores aquel q tenga este número
    var ordenProperties = {
      numeroNadador: e.target.numero.value
    };
    var errors = numberValidator(ordenProperties);
    
    Meteor.call(function(error, result){ 
      if (error) {
        
      } 
      //NO RUTER GO!!; QUE SE QUEDE EN LA MISMA PÁGINA A SIGUE INSERTANDO ELEMENTOS
    });
  }
  //TAL VEZ CONVENGA AGREGAR UN DELETE PARA EL CASO Q SE AGREGUE MAL UN NÚMERO
});