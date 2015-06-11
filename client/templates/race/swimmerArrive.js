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

  
  ordenDeLlegada: function() {
    orden = OrdenDeLlegada.find(),
    console.log("CANTIDAD: " + orden.length);
    if (orden.length === undefined ) {
      Session.set('cantQueLlegaron', 0); 
    } else {
      Session.set('cantQueLlegaron', orden.length);   //VER SI ANDA, PUEDE QUE SEA SIZE  
    }    
    console.log("seteo");
    return orden;
  }
});

//la tabla de orden de llegada va a tener un unico elemento q va a ser la posición y va a extender a la tabla del nadador
Template.swimmerArrive.events({
  'submit form': function(e) {
    e.preventDefault();
    //tengo q ir a buscar a la tabla de nadadores aquel q tenga este número
    var cantLlegaron = Session.get('cantQueLlegaron');
    cantLlegaron++;
    var ordenProperties = {
      numero: parseInt(e.target.numero.value),
      orden: cantLlegaron
    };
    var errors = numberValidator(ordenProperties);
    if (errors.numero) {
      return Session.set('swimmerArriveEditErrors', errors);
    } else {
      Meteor.call('orderInsert', ordenProperties, function(error, result){ 
        if (error) {

        } else {
          if (result.swimmerExist) {
            errors.numero = "El número ingresado ya existe";
            return Session.set('swimmerArriveEditErrors', errors);
          } else {
            if (result.numberNotSetted) {
              errors.numero = "El número no pertenece a ningún nadador";
              return Session.set('swimmerArriveEditErrors', errors);
            } 
          }
        }
      });
    }
  }
  //TAL VEZ CONVENGA AGREGAR UN DELETE PARA EL CASO Q SE AGREGUE MAL UN NÚMERO
});