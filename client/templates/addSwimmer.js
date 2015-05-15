Template.addSwimmer.events({
    'submit form': function(e) {
        e.preventDefault();
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
        };
        nadador._id = Nadadores.insert(nadador);
        Router.go('swimmerAdded');
    }
});