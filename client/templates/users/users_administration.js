Template.usersAdministration.helpers({
  user: function() {
    console.log(Meteor.users.find());
    return Meteor.users.find();
  },
  
  roleIsEmpty: function() {
    console.log(this.roles);
    if(this.roles == undefined){
      return true;
    }
    return false;
  },
  
  enableIsChecked: function() {                      //esta al pedo me parece
    console.log(this.profile.enable);
    return this.profile.enable;
  }
});


Template.usersAdministration.events({
  'click .changeEnable': function() {
    console.log(this.username);
    this.profile.enable = !this.profile.enable;
    Meteor.call('updateEnable', this, function(error, result){
      console.log("actualiza");
      if (error) {
        return alert(error.reason);
      }
      /*else{      
      Router.go('swimmerAdded');
      */             
    });
  }
});