Template.swimmerAdded.helpers({
  nadadores: function() {
  
    return Nadadores.find();
  }

});

Template.swimmerAdded.events({
    "click .infoNadador": function(){
        var imageDB = Images.findOne(this.foto._id);
        var nombre = imageDB.original.name;
        var id = imageDB._id;
        bootbox.alert("Nombre y apellido: <strong>" + this.nombre + " " + this.apellido + "</strong><br/>" +
                      " DNI: <strong>" + this.dni + "</strong><br/>" +
                      " Fecha de nacimiento: <strong>" + this.fechaDeNacimiento + "</strong><br/>" +
                      " Ciudad: <strong>" + this.ciudad + "</strong><br/>" +
                      " Club: <strong>" + this.club + "</strong><br/>" +
                      " Obra social: <strong>" + this.obraSocial + "</strong><br/>" +
                      " Email: <strong>" + this.email + "</strong><br/>" +
                      " Sexo: <strong>" + this.sexo + "</strong><br/>" +
                      "<img src=/cfs/files/images/" + id + '/'+ nombre + " alt='imagen del nadador' class='thumbnail' height='200' width='260'/>" +                       " Información adicional: datos sobre resultados en competencias anteriores");
    }
});
