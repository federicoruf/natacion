Template.swimmerEdit.created = function() {
  Session.set('swimmerEditErrors', {});
};


Template.swimmerEdit.helpers({
  errorMessage: function(field) {
    return Session.get('swimmerEditErrors')[field];
  },
  
  errorClass: function (field) {
    return !!Session.get('swimmerEditErrors')[field] ? 'has-error' : '';
  },
  
  selectedSex: function() {
    if (this.sexo == 'M') {
      return true;
    } else {
      return false;
    }  
  }
});


Template.swimmerEdit.events({
  'submit form': function(e){
    e.preventDefault();
    //como puedo hacer a esto más generico?? lo tengo repetido en 2 archivos y quisiera tenerlo 1 vez sola
    var swimmerProperties = {
      _id: this._id,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      dni: e.target.dni.value,
      obraSocial: e.target.obraSocial.value,
      club: e.target.club.value,
      ciudad: e.target.ciudad.value,
      email: e.target.email.value,
      sexo: e.target.sexo.value,
      infoAdicional: e.target.info.value,
      numero: parseInt(e.target.numero.value)
    }
    if (e.target.fechaDeNacimiento.value == "") {
     swimmerProperties.fechaDeNacimiento = this.fechaDeNacimiento;
    } else {
      swimmerProperties.fechaDeNacimiento = e.target.fechaDeNacimiento.value
    }
    var file = e.target.foto.files[0];  //toma el archivo subido en el formulario
      if (file != undefined) {
        console.log("HAY FOTO!!!");
        fileObj = Images.insert(file, function(err, fileObj){
          //alert(error.reason);
        });        
        swimmerProperties.foto = fileObj;
      } else {
        swimmerProperties.foto = this.foto;
      }
      var errors = {};
      Meteor.call ('swimmerUpdate', swimmerProperties, function(error, result) {
        console.log("actualiza");
        if (error) {
          return alert(error.reason);
        } else {
          if (result.swimmerExist) {
            errors.dni = "El dni ya existe";
            return Session.set('swimmerEditErrors', errors);
          } else {               
            if (result.emailExist) {
              errors.email = "El email ya existe";
              return Session.set('swimmerEditErrors', errors);
            } else {
              if (result.numeroExist) {
                errors.numero = "El número ya existe";
                return Session.set('swimmerEditErrors', errors);
              } else {
                Router.go('swimmerAdded');    
              }
            }
          }    
        }
      });
    },
    
  'click .delete': function(e) {
    e.preventDefault();
    if(confirm("Seguro de eliminar el nadador?")){
      var currentNadadorId = this._id;
      Images.remove(this.foto._id);
      Nadadores.remove(currentNadadorId);
      Router.go('swimmerAdded');
    }
  }
});