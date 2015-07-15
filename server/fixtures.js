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
    fechaDeNacimiento: '1988-12-08',
    obraSocial: 'IOMA',
    club: 'Chascomus natación',
    ciudad: 'Chascomús',
    email: 'fde.ruf@gmail.com',
    sexo: 'M',
    infoAdicional: '',
    numero: 24,
    categoria: 'Mayores',
    foto: fileObj,
  });
  
    Nadadores.insert({nombre: 'Elian', apellido: 'Pardo', dni: '1111111', fechaDeNacimiento: '1997-12-08', obraSocial: 'IOMA', club: 'Club Aleman', ciudad: '----', email: '1fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 449, categoria: 'Juveniles', foto: undefined,});
  
  Nadadores.insert({nombre: 'Lucas', apellido: 'Bulazio', dni: '12', fechaDeNacimiento: '1997-12-08', obraSocial: 'IOMA', club: 'Universitario', ciudad: 'La Plata', email: '2fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 101, categoria: 'Juveniles', foto: undefined,});
  
  Nadadores.insert({nombre: 'Lautaro', apellido: 'Lasagna', dni: '13', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Richard Team', ciudad: '----', email: '3fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 591 , categoria: 'Mayores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Pedro', apellido: 'Baldantoni', dni: '14', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Baldanton', ciudad: '----', email: '4fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 561, categoria: 'Mayores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Matias', apellido: 'Cagliano', dni: '15', fechaDeNacimiento: '1998-12-08', obraSocial: 'IOMA', club: 'Circulo catolico de obreros de lomas de zamora', ciudad: 'Lomas de Zamora', email: '5fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 441, categoria: 'Cadetes', foto: undefined,});
  
   Nadadores.insert({nombre: 'Francisco', apellido: 'Sanchez', dni: '16', fechaDeNacimiento: '1997-12-08', obraSocial: 'IOMA', club: 'Universitario', ciudad: 'La Plata', email: '6fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 160 , categoria: 'Juveniles', foto: undefined,});
  
   Nadadores.insert({nombre: 'Fernando', apellido: 'Valdez', dni: '17', fechaDeNacimiento: '1970-12-08', obraSocial: 'IOMA', club: 'Círculo católico bernal', ciudad: 'Bernal', email: '7fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 497, categoria: 'Master C', foto: undefined,});
  
   Nadadores.insert({nombre: 'Facundo', apellido: 'Domes', dni: '18', fechaDeNacimiento: '1975-12-08', obraSocial: 'IOMA', club: 'Poseidon', ciudad: 'City Bell', email: '8fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 156, categoria: 'Master B', foto: undefined,});
  
   Nadadores.insert({nombre: 'Juan Pedro', apellido: 'Radinovsky', dni: '19', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Richard Team', ciudad: '----', email: '9fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 566, categoria: 'Mayores', foto: undefined,});
  
   Nadadores.insert({nombre: 'Leandro', apellido: 'Gioa', dni: '20', fechaDeNacimiento: '1975-12-08', obraSocial: 'IOMA', club: 'Richard Team', ciudad: '----', email: '10fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 300, categoria: 'Master B', foto: undefined,});
  
   Nadadores.insert({nombre: 'Nicolas', apellido: 'Walsh', dni: '21', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Vecinal de Munro', ciudad: 'Munro', email: '11fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 755, categoria: 'Mayores', foto: undefined,});
  
   Nadadores.insert({nombre: 'Gustavo', apellido: 'De Nobili', dni: '22', fechaDeNacimiento: '1970-12-08', obraSocial: 'IOMA', club: 'Velez Sarsfield', ciudad: '----', email: '12fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 90 , categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Verónica', apellido: 'Romero Serwatka', dni: '23', fechaDeNacimiento: '1970-12-08', obraSocial: 'IOMA', club: 'Defensores de Bandfield', ciudad: 'Bandfield', email: '13fde.ruf@gmail.com', sexo: 'F', infoAdicional: '', numero: 517, categoria: 'Mayores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Walter', apellido: 'Canosa', dni: '24', fechaDeNacimiento: '1981-12-08', obraSocial: 'IOMA', club: 'Estoa', ciudad: '-----', email: '14fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 536, categoria: 'Master A', foto: undefined,});
  
  Nadadores.insert({nombre: 'Marcelo', apellido: 'Castro', dni: '25', fechaDeNacimiento: '1969-12-08', obraSocial: 'IOMA', club: 'Quinto estilo', ciudad: '----', email: '15fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 501, categoria: 'Master D', foto: undefined,});
  
  Nadadores.insert({nombre: 'Camila', apellido: 'Otaran', dni: '26', fechaDeNacimiento: '1998-12-08', obraSocial: 'IOMA', club: 'Sporting Club', ciudad: 'Wilde', email: '16fde.ruf@gmail.com', sexo: 'F', infoAdicional: '', numero: 536, categoria: 'Cadetes', foto: undefined,});
  
  Nadadores.insert({nombre: 'German Raul', apellido: 'Gallo', dni: '27', fechaDeNacimiento: '1975-12-08', obraSocial: 'IOMA', club: 'Actitud acuatica', ciudad: '----', email: '17fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 501, categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Gustavo', apellido: 'Acuña', dni: '28', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Aminal Team', ciudad: '----', email: '18fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 476, categoria: 'Mayores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Gustavo Adrian', apellido: 'D\'Amelia', dni: '29', fechaDeNacimiento: '1980-12-08', obraSocial: 'IOMA', club: 'CDSA', ciudad: '----', email: '19fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 461, categoria: 'Master A', foto: undefined,});
  
  Nadadores.insert({nombre: 'Ignacio', apellido: 'Borre', dni: '30', fechaDeNacimiento: '1998-12-08', obraSocial: 'IOMA', club: 'Defensores de Glew', ciudad: 'Glew', email: '20fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 752, categoria: 'Cadetes', foto: undefined,});
  
  Nadadores.insert({nombre: 'Matias', apellido: 'Machado', dni: '31', fechaDeNacimiento: '1979-12-08', obraSocial: 'IOMA', club: 'Club Neptunia', ciudad: 'Gualeguaychu', email: '21fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 446, categoria: 'Master B', foto: undefined,});
  
  Nadadores.insert({nombre: 'Gabriel', apellido: 'Vinzio', dni: '32', fechaDeNacimiento: '1970-12-08', obraSocial: 'IOMA', club: 'Dragones', ciudad: '----', email: '22fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 460, categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Jean Luca', apellido: 'Molinelli', dni: '33', fechaDeNacimiento: '1998-12-08', obraSocial: 'IOMA', club: 'Wilde Sporting Club', ciudad: 'Wilde', email: '23fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 433, categoria: 'Cadetes', foto: undefined,});
  
  Nadadores.insert({nombre: 'Milagros', apellido: 'Gardiol', dni: '34', fechaDeNacimiento: '1997-12-08', obraSocial: 'IOMA', club: 'Villa España', ciudad: '----', email: '24fde.ruf@gmail.com', sexo: 'F', infoAdicional: '', numero: 381, categoria: 'Juveniles', foto: undefined,});
  
  Nadadores.insert({nombre: 'Adrián Santiago', apellido: 'Frljanic', dni: '35', fechaDeNacimiento: '12-08-1974', obraSocial: 'IOMA', club: '----', ciudad: '----', email: '25fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 510, categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Oscar', apellido: 'Berrueta', dni: '36', fechaDeNacimiento: '1974-12-08', obraSocial: 'IOMA', club: 'Chascomús Natación', ciudad: 'Chascomús', email: '26fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 150, categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Hector', apellido: 'Valcarce', dni: '37', fechaDeNacimiento: '1955-12-08', obraSocial: 'IOMA', club: 'Club Atletico Independiente', ciudad: 'Avellaneda', email: '27fde.ruf@gmail.com', sexo: '', infoAdicional: '', numero: 546, categoria: 'Master F', foto: undefined,});
  
  Nadadores.insert({nombre: 'Fernando', apellido: 'Saldaña', dni: '38', fechaDeNacimiento: '1974-12-08', obraSocial: 'IOMA', club: 'Estudiantes', ciudad: 'La Plata', email: '28fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 438, categoria: 'Master C', foto: undefined,});
  
  Nadadores.insert({nombre: 'Matias', apellido: 'Iriarte', dni: '39', fechaDeNacimiento: '1979-12-08', obraSocial: 'IOMA', club: 'Deportivo', ciudad: 'Chascomus', email: '29fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 593, categoria: 'Master B', foto: undefined,});
  
  Nadadores.insert({nombre: 'Florencia', apellido: 'Panetta', dni: '40', fechaDeNacimiento: '1997-12-08', obraSocial: 'IOMA', club: 'Wilde Sporting Club', ciudad: 'Wilde', email: '30fde.ruf@gmail.com', sexo: 'F', infoAdicional: '', numero: 647, categoria: 'Juveniles', foto: undefined,});
  
  Nadadores.insert({nombre: 'Jeremias', apellido: 'De Micheli', dni: '41', fechaDeNacimiento: '2000-12-08', obraSocial: 'IOMA', club: 'Universitarios', ciudad: 'City Bell', email: '31fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 405, categoria: 'Menores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Pedro', apellido: 'Gorochik', dni: '42', fechaDeNacimiento: '1988-12-08', obraSocial: 'IOMA', club: 'Villa España', ciudad: '----', email: '34fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 428, categoria: 'Mayores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Lucas Ezequiel', apellido: 'Ochoa', dni: '43', fechaDeNacimiento: '2000-12-08', obraSocial: 'IOMA', club: 'Defensores de Glew', ciudad: 'Glew', email: '32fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 529, categoria: 'Menores', foto: undefined,});
  
  Nadadores.insert({nombre: 'Juan Martín', apellido: 'Regueira', dni: '44', fechaDeNacimiento: '1998-12-08', obraSocial: 'IOMA', club: 'Defensores de Bandfield', ciudad: 'Bandfield', email: '33fde.ruf@gmail.com', sexo: 'M', infoAdicional: '', numero: 489, categoria: 'Mayores', foto: undefined,});
  
  //Nadadores.insert({nombre: '', apellido: '', dni: '', fechaDeNacimiento: '19-12-08', obraSocial: 'IOMA', club: '', ciudad: '', email: 'fde.ruf@gmail.com', sexo: '', infoAdicional: '', numero:  , categoria: '', foto: undefined,});
  
  
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