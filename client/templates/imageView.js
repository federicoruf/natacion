Template.imageView.helpers({
  images: function () {
    console.log("eeeee");
    return Images.find(); // Where Images is an FS.Collection instance
  }
});