Template.swimmerInfo.helpers({
  'selectedClass': function(){
    var swimmerId = this._id;
    var selectedSwimmer = Session.get('selectedSwimmer');
    if (swimmerId === selectedSwimmer){
      return 'selected';
    }
  }

});
Template.swimmerInfo.events({
  'click .swim': function(){
      Session.set('selectedSwimmer',this._id);
  }
});
