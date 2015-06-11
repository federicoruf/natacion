OrdenDeLlegada = new Mongo.Collection('ordenDeLlegada');

numberValidator = function (orden) {
  var errors = {};
  if(!orden.numero)
    errors.numero = "Por favor ingrese el número";
  return errors;
};


Meteor.methods({
  orderInsert: function(orderAttributes) {  //ya de la parte del cliente voy a asignarle el orden a partir de la variable que guardo en la sesión
    check(orderAttributes,{
      orden: Number,
      numero: Number
    });
    //comprueba q el número este sereado a algún nadador
    var swimmer = Nadadores.findOne( {numero: orderAttributes.numero} );
    if (swimmer == undefined) {
      return{
        numberNotSetted: true
      }
    }
    //chequeo q el numero de nadador a agregar ya no haya llegado
    prevOrder = OrdenDeLlegada.find().fetch();
    var i = 0;
    while (i < prevOrder.length) {
      var ord = prevOrder[i];
      if (ord.swimmer.dni == swimmer.dni) {
        return{
          swimmerExist: true,
          _id: swimmer._id
        };   
      }
      i++;
    }
    var finalOrder = _.extend(orderAttributes, {
      swimmer: swimmer
    });
    var orderId = OrdenDeLlegada.insert(finalOrder);
    return {
      _id: orderId
    };
  }
});