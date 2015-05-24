Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', {path: '~/uploads'})]
});

if(Meteor.isClient){
  Meteor.subscribe('Images');
}

Images.allow({
    update: function(userId, image) { 
        console.log("111");
        return ownsDocument(userId, image); },
    remove: function(userId, image) { return ownsDocument(userId, image); },
});
