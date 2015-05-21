Template.swimmerAdded.helpers({
  nadadores: function() {
    return Nadadores.find();
  }
});

bootbox.alert("Hello world!", function() {
  Example.show("Hello world callback");
});