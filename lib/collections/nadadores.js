Nadadores = new Mongo.Collection('nadadores');


Meteor.methods({
  swimmerUpdate: function(swimmerAttributes){
    check(swimmerAttributes,{
      _id: String,
      nombre: String,
      apellido: String,
      dni: String,
      fechaDeNacimiento: String,
      ciudad: String,
      club: String,
      sexo: String,
      obraSocial: String,
      email: String,
      infoAdicional: String,
      foto: Object, 
      numero: Match.Optional(Number)
    });
    var result = checkSwimmerRepeated(swimmerAttributes);
    if (result != null)
      return result;
    var nadadorId = Nadadores.update(swimmerAttributes._id, swimmerAttributes);
    return {
      _id: nadadorId
    };
  },

  swimmerInsert: function(swimmerAttributes) {
    check(swimmerAttributes,{
      nombre: String,
      apellido: String,
      dni: String,
      fechaDeNacimiento: String,
      ciudad: String,
      club: String,
      sexo: String,
      obraSocial: String,
      email: String,
      foto: Object,
      numero: Match.Optional(Number)
    });
    var errors = validateNadador(swimmerAttributes);
    if (errors.nombre || errors.apellido || errors.dni || errors.fechaDeNacimiento || errors.ciudad || errors.club || errors.obraSocial || errors.email || errors.sexo || errors.foto)
      throw new Meteor.Error('invalid-swimmer',"Setee correctamente los campos");
    var result = checkSwimmerRepeated(swimmerAttributes);
    if (result != null)
      return result;    
    var nadadorId = Nadadores.insert(swimmerAttributes);
    return {
      _id: nadadorId
    };
  }
});


checkSwimmerRepeated = function(swimmerAttributes){
  var nadadoresCollection = Nadadores.find().fetch(); 
  var i = 0;
  while (i < nadadoresCollection.length) {
    var nadador = nadadoresCollection[i];
    if (nadador.dni == swimmerAttributes.dni & nadador._id != swimmerAttributes._id)
      return{
        swimmerExist: true,
        _id: nadador._id
      };   
    if (nadador.numero == swimmerAttributes.numero & nadador._id != swimmerAttributes._id)
      return {
        numeroExist: true,
        _id: nadador._id
      };
    if (nadador.email == swimmerAttributes.email & nadador._id != swimmerAttributes._id)
      return {
        emailExist: true,
        _id: nadador._id
      };
    i++;
  }
  return null;
};


validateNadador = function (nadador) {
  var errors = {};
  if(!nadador.nombre)
    errors.nombre = "Por favor ingrese el nombre";
  if(!nadador.apellido)
    errors.apellido = "Por favor ingrese el apellido";
  if(!nadador.dni)
    errors.dni = "Por favor ingrese el dni";
  if(!nadador.fechaDeNacimiento)
    errors.fechaDeNacimiento = "Por favor ingrese la fecha de nacimiento";
  if(!nadador.ciudad)
    errors.ciudad = "Por favor ingrese la ciudad";
  if(!nadador.club)
    errors.club = "Por favor ingrese el club";
  if(!nadador.sexo)
    errors.sexo = "Por favor ingrese el sexo";
  if(!nadador.obraSocial)
    errors.obraSocial = "Por favor ingrese la obra social";
  if(!nadador.email)
    errors.email = "Por favor ingrese el email";
  if(!nadador.foto)
    errors.foto = "Por favor ingrese la foto";
  return errors;
};

Nadadores.allow({
  update: function(swimmerId, swimmer) { return true; },
  remove: function(swimmerId, swimmer) { return true; },
});