Template.swimmerAdded.helpers({
  nadador: function() {
    return Nadadores.find();
  },
  
  myCollection: function () {
    i18n.setLanguage('es');
    return Nadadores;
  },
  
  tableSettings: function() {
    return {
      fields: [
        { key: 'nombre', label: 'Nombre' },
        { key: 'apellido', label: 'Apellido' },
        { key: 'dni', label: 'Dni' },
        { key: 'obraSocial', label: 'Obra Social' },
        { key: 'club', label: 'Club' },
        { key: 'ciudad', label: 'Ciudad' },
        { key: 'email', label: 'Email' },
        { key: 'sexo', label: 'Sexo' },
        { key: 'numero', label: 'Número' },
        { key: 'fechaDeNacimiento', label: 'Fecha de nacimiento' },
      ]
    }
  }
});


Template.swimmerAdded.events({
  'click .reactive-table tr': function(){
    var imageDB = Images.findOne(this.foto._id);
    var nombre = imageDB.original.name;
    var id = imageDB._id;
    
    var currentUser = Meteor.user();
    var editar = '';
    if (Roles.userIsInRole(currentUser, 'director') || Roles.userIsInRole(currentUser, 'assistantDirector')) {
      editar = '<a href="/nadadores/' + this._id + '/edit" onclick="bootbox.hideAll()">Editar</a>';
    }
    
    bootbox.alert("Nombre y apellido: <strong>" + this.nombre + " " + this.apellido + "</strong><br/>" +
                  " DNI: <strong>" + this.dni + "</strong><br/>" +
                  " Fecha de nacimiento: <strong>" + this.fechaDeNacimiento + "</strong><br/>" +
                  " Ciudad: <strong>" + this.ciudad + "</strong><br/>" +
                  " Club: <strong>" + this.club + "</strong><br/>" +
                  " Obra social: <strong>" + this.obraSocial + "</strong><br/>" +
                  " Email: <strong>" + this.email + "</strong><br/>" +
                  " Sexo: <strong>" + this.sexo + "</strong><br/>" +
                  "<img src=/cfs/files/images/" + id + '/'+ nombre + " alt='imagen del nadador' class='thumbnail' height='200' width='260'/>" +                       
                  " Información adicional: datos sobre resultados en competencias anteriores <br/>" +
                 editar);
  }
});
