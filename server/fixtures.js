if (Nadadores.find().count() === 0) {

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
}