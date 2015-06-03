if (Nadadores.find().count() === 0) {
  
  //CREO UN USUARIO X DEFECTO Y LE ASIGNO UN ROL
  var idUser = Accounts.createUser({
    username: 'admin',
    password: 'admin',
    profile: {
      enable: true
    },
    roles: []
  });                    
  Roles.createRole('director');
  Roles.createRole('assistantDirector');
  Roles.createRole('visitor');
  
  Roles.addUsersToRoles(idUser, ['director']);
  
  //Roles.setUserRoles(this.profile, ['director']);   RESETEAR LA BD Y VER DONDE Y COMO QUEDA GUARDADO, SI NO ANDA ASÍ, AGREGAR A MANO EL ROL COMO UN ARRAY ADENTRO DE PROFILE Y FUERA
  
  var fotoHTTP = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/084/072/16f8711.jpg';
  fileObj = Images.insert(fotoHTTP, function(err, fileObj){
    //alert(error.reason);
  });        
  Nadadores.insert({
    nombre: 'Federico',
    apellido: 'Rufrancos',
    dni: '1111111',
    fechaDeNacimiento: '12/08/1988',
    obraSocial: 'IOMA',
    club: 'Chascomus natación',
    ciudad: 'Chascomús',
    email: 'fde.ruf@gmail.com',
    sexo: 'M',
    infoAdicional: '',
    foto: fileObj
  });
  Categories.insert({name: 'Menores', yearStart: 2001, yearFinish: 2002});
  Categories.insert({name: 'Cadetes', yearStart: 1998, yearFinish: 2001});
  Categories.insert({name: 'Juveniles', yearStart: 1995, yearFinish: 1997});
  Categories.insert({name: 'Mayores', yearStart: 1985, yearFinish: 1994});
  Categories.insert({name: 'Master A', yearStart: 1980, yearFinish: 1984});
  Categories.insert({name: 'Master B', yearStart: 1975, yearFinish: 1979});
  Categories.insert({name: 'Master C', yearStart: 1970, yearFinish: 1974});
  Categories.insert({name: 'Master D', yearStart: 1965, yearFinish: 1969});
  Categories.insert({name: 'Master E', yearStart: 1960, yearFinish: 1964});
  Categories.insert({name: 'Master F', yearStart: 1955, yearFinish: 1959});
  Categories.insert({name: 'Master G', yearStart: 1950, yearFinish: 1954});
  Categories.insert({name: 'Master H', yearStart: 1945, yearFinish: 1949});
  Categories.insert({name: 'Master I', yearStart: 1900, yearFinish: 1944});
  
}