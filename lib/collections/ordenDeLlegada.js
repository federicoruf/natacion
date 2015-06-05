OrdenDeLlegada = new Mongo.Collection('ordenDeLlegada');

numberValidator = function (orden) {
  var errors = {};
  if(!orden.numeroNadador)
    errors.numeroNadador = "Por favor ingrese el número";
  return errors;
};