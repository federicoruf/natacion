Router.configure({
  layoutTemplate: 'layout',     //le dice a router q use layout
  //loadingTemplate: 'loading',     //plantilla de que se esta cargando 
  //notFoundTemplate: 'notFound'
  waitOn: function() { 
    return [Meteor.subscribe('nadadores'), Meteor.subscribe('categories')]; 
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

Router.route('/nadadores/:_id/info', {
  name: 'swimmerInfo',
  data: function() { 
    return Nadadores.findOne(this.params._id); 
  }
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
})


Router.route('/categoryAdd', {
  name: 'categoryAdd'
});

Router.route('/categories/:_id/edit', {
  name: 'categoryEdit',
  data: function() { 
    return Categories.findOne(this.params._id); 
  }
});


Router.route('/imageView', {
    name: 'imageView'
});