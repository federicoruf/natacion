//salvar los datos seteados del nadador, para después mostrar esta página y cuando termina de cargar la foto recargar los campos
Template.photoUpload.helpers({
   myCallbacks: function() {
       return {
            finished: function(index, fileInfo, context) {
                Session.set("fileName", fileInfo.name);  
                console.log(fileInfo.name);
                console.log(fileInfo.path);
                Router.go('addSwimmer');
            },
        };
   }
});