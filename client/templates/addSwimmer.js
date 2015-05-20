Template.addSwimmer.events({
    'submit form': function(e) {
        
        e.preventDefault();
        var nadador = {
            nombre: e.target.nombre.value,
            apellido: e.target.nombre.value,
            dni: e.target.nombre.value,
            fechaDeNacimiento: e.target.fechaDeNacimiento.value,
            obraSocial: e.target.obraSocial.value,
            club: e.target.club.value,
            ciudad: e.target.ciudad.value,
            email: e.target.email.value,
            sexo: e.target.sexo.value
        }
        /*nadador._id = Nadadores.insert(nadador);
        Router.go('swimmerAdded');    */
        Meteor.call('nadadorInsert', nadador, function(error, result){
           if (error) {
               return alert(error.reason);
           }else {
               Router.go('swimmerAdded');    
           }
        });
        
    }
});


/*        
NO FUNCA, TAL VEZ PORQUE NO TENGO BAJADO E INSTALADO EL PAQUETE DE JQUERY, PERO SI EN EL PROYECTO DE MICROSCOPE NO LO BAJÓ Y KO USA
var nadador = {
            nombre: $(e.target).find('[name=nombre]').val,
            apellido: $(e.target).find('[name=apellido]').val,
            dni: $(e.target).find('[name=dni]').val,
            fechaDeNacimiento: $(e.target).find('[name=fechaDeNacimiento]').val,
            obraSocial: $(e.target).find('[name=obraSocial]').val,
            club: $(e.target).find('[name=club]').val,
            cuidad: $(e.target).find('[name=ciudad]').val,
            email: $(e.target).find('[name=email]').val,
            sexo: $(e.target).find('[name=sexo]').val
        };*/
