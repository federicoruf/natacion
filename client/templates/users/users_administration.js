Template.usersAdministration.created = function() {
  this.roles = Meteor.roles.find().fetch();
}

Template.usersAdministration.helpers({
  user: function() {
    return Meteor.users.find();
  },
  
  roleIsSelected: function(role) {
    if(this.roles == undefined)
      return true;
    return false;
  },
  
  userRole: function() {
    return Meteor.roles.find().fetch();
  },
  
  selected: function(myRole){
    /*if (myRole == undefined && this.name !=  'visitor') {
      return '';
    } else {
      if (myRole == undefined && this.name ==  'visitor') {
        return 'selected';
      } else {*/
        if(this.name == myRole[0]){   
          return 'selected';
        } else {
          return '';
        }
      
    
  }
});


Template.usersAdministration.events({
  
  'change select': function (event) {
    if(this.roles == undefined){
      console.log("....................................actualiza el perfil de usuario");
      console.log(event.target.value);
      Roles.setUserRoles(this, event.target.value);
    } else {
      this.roles[0]=event.target.value;
    }
    console.log(this); 
    Meteor.call('updateAttributes', this, function(error, result){
      console.log("updatea");
      if (error ) {
        return alert(error.reason);
      }
    });
  },
  
  'click .changeEnable': function() {
    console.log(this.username);
    this.profile.enable = !this.profile.enable;
    Meteor.call('updateAttributes', this, function(error, result){
      console.log("actualiza");
      if (error) {
        return alert(error.reason);
      }    
    });
  }
});

/*
Template.userAdministration('selected', function(foo, bar) {
  console.log("aaaaaaaaaaaaa");
  console.log(this.user.username);
});*/