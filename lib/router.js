Router.configure({
  layoutTemplate: 'layout',     //le dice a router q use layout
  //loadingTemplate: 'loading',     //plantilla de que se esta cargando 
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('nadadores'), Meteor.subscribe('categories')];     //no se debería suscribir para todos a las categorías, solo para el rol director debería ser
  }
}); 


Router.route('/', {
  name: 'welcome'
});


//------------SWIMMER


Router.route('/swimmerAdded', {
  name: 'swimmerAdded'
});

Router.route('/swimmerArrive', {
  name: 'swimmerArrive'
});

Router.route('/addSwimmer',{
  name: 'addSwimmer'
});

Router.route('/nadadores/:_id/edit', {
  name: 'swimmerEdit',
  data: function() { 
    return Nadadores.findOne(this.params._id); 
  }
});


//------------CATEGORIES


Router.route('/categoryAdministration', {
  name: 'categoryAdministration'
});

Router.route('/categoryAdd', {
  name: 'categoryAdd'
});

Router.route('/categories/:_id/edit', {
  name: 'categoryEdit',
  data: function() { 
    return Categories.findOne(this.params._id); 
  }
});


//--------------USERS

Router.route('/usersAdministration', {
  name: 'usersAdministration'
});


//--------------SESSION

/*
var requireLogin = function() {
  console.log("entra en este");
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {  
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }        
  } else {
    this.next();
  }
}*/



var requireDirectorRights = function(){
  console.log("ennnn");
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {  
        this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }        
  } else {
    user = Meteor.user();
    if (Roles.userIsInRole(user, ['director'])) {
      console.log('si');
      this.next();
    } else {
      this.render('accessDenied');
    }
  }
}

var requireAssitantRights = function(){
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {  
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }        
  } else {
    user = Meteor.user();
    if (Roles.userIsInRole(user, ['director']) || Roles.userIsInRole(user, ['assistantDirector'])) {
      console.log('sasasai');
      this.next();
    } else {
      this.render('accessDenied');
    }
  }
}

Router.onBeforeAction('dataNotFound', {only: 'swimmerAdded'}); //le dice a ironRoute que muestre la página de no encontrado, no solo cuando la ruta sea inválida, si no también para la ruta postPage cuando la función data devuelva un objeto falso (o null, false, undefined o vació) (LA UBICACIÓN DONDE LO PONGA A ESTO NO IMPORTA).   

Router.onBeforeAction(requireDirectorRights, {only: ['categoryAdd', 
                                                    'categoryEdit', 
                                                    'categoryAdministration',
                                                    'swimmerEdit',
                                                    'addSwimmer']});  //AGREGAR LUEGO AQUELLOS RELACIONADOS AL ABM

Router.onBeforeAction(requireAssitantRights, {only: ['swimmerEdit',
                                                    'addSwimmer']});    //invoca al requireLogin definido arriba




//----------------------------


Router.route('/imageView', {
    name: 'imageView'
});