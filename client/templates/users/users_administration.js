Template.usersAdministration.helpers({
  user: function() {
    console.log(Meteor.users.find());
    return Meteor.users.find();
  },
  
  roleIsEmpty: function(){
    console.log(this.roles);
    if(this.roles == undefined){
      return true;
    }
    return false;
  }  
});