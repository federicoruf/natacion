Template.ordenInfo.events({
  'click .eliminarNadador': function(e) {
    e.preventDefault();
    if(confirm("Seguro de eliminar el nadador?")){
      OrdenDeLlegada.remove(this._id);
    }
  }
});