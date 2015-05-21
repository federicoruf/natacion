Nadadores = new Mongo.Collection('nadadores');


Meteor.methods({
    nadadorInsert: function(nadadorAttributes) {
        check(nadadorAttributes,{
            nombre: String,
            apellido: String,
            dni: String,
            fechaDeNacimiento: String,
            ciudad: String,
            club: String,
            sexo: String,
            obraSocial: String,
            email: String
        });
        var nadadorId = Nadadores.insert(nadadorAttributes);
        return {
            _id: nadadorId
        };
    }
});

Meteor.publish('nadadores', function() {
  return Nadadores.find();
});