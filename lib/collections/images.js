Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', {path: '~/uploads'})]
});

if(Meteor.isClient){
  Meteor.subscribe('Images');
}