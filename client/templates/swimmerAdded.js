Template.swimmerAdded.helpers({
  nadadores: function() {
    return Nadadores.find();
  }
});

Template.swimmerAdded.events({
    "click .infoNadador": function(){
        var nadador ={
            nombre: this.nombre
        };
        bootbox.alert("Nombre y apellido: <strong>" + this.nombre + " " + this.apellido + "</strong><br/>" + 
                      " DNI: <strong>" + this.dni + "</strong><br/>" + 
                      " Fecha de nacimiento: <strong>" + this.fechaDeNacimiento + "</strong><br/>" +  
                      " Ciudad: <strong>" + this.ciudad + "</strong><br/>" + 
                      " Club: <strong>" + this.club + "</strong><br/>" + 
                      " Obra social: <strong>" + this.obraSocial + "</strong><br/>" + 
                      " Email: <strong>" + this.email + "</strong><br/>" + 
                      " Sexo: <strong>" + this.sexo + "</strong><br/>" + 
                      "FOTO!!!");
    }
});