Router.configure({
    //layoutTemplate: 'layout',     //le dice a router q use layout
    //loadingTemplate: 'loading',     //plantilla de que se esta cargando 
    //notFoundTemplate: 'notFound'
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
    data: '{{nadador}}'
  //data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/photoUpload', {
   name: 'photoUpload' 
});