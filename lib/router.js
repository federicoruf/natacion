Router.configure({
    layoutTemplate: 'layout',     //le dice a router q use layout
    //loadingTemplate: 'loading',     //plantilla de que se esta cargando 
    //notFoundTemplate: 'notFound'
     waitOn: function() { 
        return [Meteor.subscribe('nadadores')]; 
    }
}); 


Router.route('/', {
    name: 'welcome'
});

Router.route('/swimmerAdded', {
    name: 'swimmerAdded'
});

Router.route('/swimmerArrive', {
    name: 'swimmerArrive'
});

Router.route('/addSwimmer',{
    name: 'addSwimmer',
/*    waitOn: function () {
        return Meteor.subscribe('images');
    }*/
});

Router.route('/nadadores/:_id/info', {
    name: 'swimmerInfo',
    data: function() { 
        return Nadadores.findOne(this.params._id); 
    }
});
Router.route('/nadadores/:_id/edit', {
    name: 'swimmerEdit',
    data: function() { return Nadadores.findOne(this.params._id); }
});



Router.route('/imageView', {
    name: 'imageView'
});