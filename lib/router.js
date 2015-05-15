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
    name:'swimmerArrive'
});

Router.route('/addSwimmer',{
    name:'addSwimmer'
});

               