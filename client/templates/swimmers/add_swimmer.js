Template.addSwimmer.events({
  'submit form': function(e) {
    e.preventDefault();
    //VALIDACIÓN DE ARCHIVOS
    var file = e.target.foto.files[0];  //toma el archivo subido en el formulario
    var fileObj;
    if (file != undefined) {
      fileObj = Images.insert(file, function(err, fileObj){
        //alert(error.reason);
      });         
    }
  
    //asigna automaticamente la categoría al nadador de acuerdo al año de nacimiento ingresado
    var year = e.target.fechaDeNacimiento.value.substring(0,4);
    var allCategories = Categories.find().fetch();
    var find = false;
    var i = 0;
    while (!find && i < allCategories.length) {
      if (year >= allCategories[i].yearStart && year <= allCategories[i].yearFinish) {
        find = true;
      } else {
        i++;
      }
    }
    
    var nadador = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      dni: e.target.dni.value,
      fechaDeNacimiento: e.target.fechaDeNacimiento.value,
      obraSocial: e.target.obraSocial.value,
      club: e.target.club.value,
      ciudad: e.target.ciudad.value,
      email: e.target.email.value,
      sexo: e.target.sexo.value,
      foto: fileObj,
      numero: parseInt(e.target.numero.value),
      categoria: allCategories[i].name
    }
    //VALIDACIÓN DE CAMPOS
    var errors = validateNadador(nadador);
    if(errors.nombre || errors.apellido || errors.dni || errors.fechaDeNacimiento || errors.ciudad || errors.club || errors.obraSocial || errors.email || errors.sexo || errors.foto || errors.numero){
      return Session.set('addSwimmerErrors', errors);
    } else {
      Meteor.call('swimmerInsert', nadador, function(error, result){  
        //ojo, cambie nadaddorUpdate x swimmerInsert, a ver si se rompe algo
        if (error) {
          return alert(error.reason);
        } else {
          if(result.swimmerExist){
            errors.dni = "El dni ya existe";
            return Session.set('addSwimmerErrors', errors);
          } else {               
            if(result.emailExist){
              errors.email = "El email ya existe";
              return Session.set('addSwimmerErrors', errors);
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
    }
  }
});


Template.addSwimmer.created = function(){
  Session.set('addSwimmerErrors', {});
};


Template.addSwimmer.helpers({
  errorMessage: function(field) {
    return Session.get('addSwimmerErrors')[field];
  },

  errorClass: function(field) {
    return !!Session.get('addSwimmerErrors')[field] ? 'has-error' : '';
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
