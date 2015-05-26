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
    console.log("INSERTA CATEGORIAS!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
    Categories.insert({name: 'Menores', yearStar: 2001, yearFinish: 2002});
    Categories.insert({name: 'Cadetes', yearStar: 1998, yearFinish: 2001});
    Categories.insert({name: 'Juveniles', yearStar: 1995, yearFinish: 1997});
    Categories.insert({name: 'Mayores', yearStar: 1985, yearFinish: 1994});
    Categories.insert({name: 'Master A', yearStar: 1980, yearFinish: 1984});
    Categories.insert({name: 'Master B', yearStar: 1975, yearFinish: 1979});
    Categories.insert({name: 'Master C', yearStar: 1970, yearFinish: 1974});
    Categories.insert({name: 'Master D', yearStar: 1965, yearFinish: 1969});
    Categories.insert({name: 'Master E', yearStar: 1960, yearFinish: 1964});
    Categories.insert({name: 'Master F', yearStar: 1955, yearFinish: 1959});
    Categories.insert({name: 'Master G', yearStar: 1950, yearFinish: 1954});
    Categories.insert({name: 'Master H', yearStar: 1945, yearFinish: 1949});
    Categories.insert({name: 'Master I', yearStar: 1900, yearFinish: 1944});
}