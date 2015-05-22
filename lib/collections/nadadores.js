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
            email: String,
            foto: Object
        });
        var errors = validateNadador(nadadorAttributes);
        if(errors.nombre || errors.apellido || errors.dni || errors.fechaDeNacimiento || errors.ciudad || errors.club || errors.obraSocial || errors.email || errors.sexo || errors.foto)
            throw new Meteor.Error('invalid-swimmer',"Setee correctamente los campos");
        
        var nadadorConMismoDni = Nadadores.findOne({dni: nadadorAttributes.dni});         
        console.log("1"+nadadorConMismoDni);
        if(nadadorConMismoDni){
            return{
                swimmerExist: true,
                _id: nadadorConMismoDni._id
            }
        }
        
        var nadadorConMismoEmail = Nadadores.findOne({email: nadadorAttributes.email});
        console.log("2"+nadadorConMismoEmail);
        if(nadadorConMismoEmail){
            console.log("if");
            return{
                emailExist:true,
                _id: nadadorConMismoEmail._id
            }
        }
        
        var nadadorId = Nadadores.insert(nadadorAttributes);
        return {
            _id: nadadorId
        };
    }
});


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
