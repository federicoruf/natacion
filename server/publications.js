//publicaciones a las colecciones
Meteor.publish('nadadores', function(){
    return Nadadores.find();
});

Meteor.publish('Images',function(){
  return Images.find();
});

Meteor.publish('categories', function(){
   return Categories.find(); 
});

Images.allow({
  insert: function(userId, doc) { return true; },
  update: function(userId,doc) { return true; },
  remove: function(userId,doc) { return false; },
  download: function(userId, doc) {return true;},
});