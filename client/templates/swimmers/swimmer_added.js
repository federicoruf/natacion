Template.swimmerAdded.helpers({
  nadador: function() {
    return Nadadores.find();
  },
  
  //modfica el idioma para q los elementos de la tabla se muestren en español
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
        { key: 'club', label: 'Club' },
        { key: 'ciudad', label: 'Ciudad' },
        { key: 'sexo', label: 'Sexo' },
        { key: 'numero', label: 'Número' },
        { key: 'fechaDeNacimiento', label: 'Fecha de nacimiento' },
      ]
    }
  }
});


Template.swimmerAdded.events({
  'click .reactive-table tr': function(event){
    event.preventDefault();
    if (this.nombre != undefined) {
      if (this.foto != undefined) {
        var imageDB = Images.findOne(this.foto._id);
        var nombre = imageDB.original.name;
        var id = imageDB._id;
      } /*
      PENSE EN QUE TRAIGA UNA FOTO X DEFECTO, PERO TAMPOCO ANDA
      else {
        console.log("no tiene foto");
      var fotoHTTP = 'https://chezcoluii.xtrweb.com/img/no_foto.jpg';
      var file = new FS.File();
      file.attachData(fotoHTTP, function() {
        fileObj = Images.insert(file);
        console.log(arguments);
      });

      }*/
      var currentUser = Meteor.user();
      var editar = '';
      if (Roles.userIsInRole(currentUser, 'director') || Roles.userIsInRole(currentUser, 'assistantDirector')) {
        editar = '<a href="/nadadores/' + this._id + '/edit" onclick="bootbox.hideAll()">Editar</a>';
      }

      bootbox.alert("Nombre y apellido: <strong>" + this.nombre + " " + this.apellido + "</strong><br/>" +
                    " DNI: <strong>" + this.dni + "</strong><br/>" +
                    " Fecha de nacimiento: <strong>" + this.fechaDeNacimiento + "</strong><br/>" +
                    " Categoría: <strong>" + this.categoria + "</strong><br/>"+
                    " Ciudad: <strong>" + this.ciudad + "</strong><br/>" +
                    " Club: <strong>" + this.club + "</strong><br/>" +
                    " Obra social: <strong>" + this.obraSocial + "</strong><br/>" +
                    " Email: <strong>" + this.email + "</strong><br/>" +
                    " Sexo: <strong>" + this.sexo + "</strong><br/>" +
                    "<img src=/cfs/files/images/" + id + '/'+ nombre + " alt='imagen del nadador' class='thumbnail' height='200' width='260'/>" +                       
                    " Información adicional: datos sobre resultados en competencias anteriores <br/>" +
                   editar);
    }
  }
});
