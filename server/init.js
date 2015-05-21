Meteor.startup(function () {
 //process.env.PWD me da undefined, POR ESO TENGO Q ARMAR EL PATH A MANOPLA
  var myStr = process.cwd().split(".meteor")[0];
  myStr2 = myStr.split("C:\\")[1];

  tempDir= myStr2 + 'public/.uploads/tmp';
  console.log("tempdir: " + tempDir);
  uploadDir= myStr2 + 'public/.uploads';   
  console.log("uploadDir: " + '/' + uploadDir);
    
  UploadServer.init({
    uploadDir: '/' + uploadDir,
    tmpDir: '/' + tempDir,
    //tmpDir: process.env.PWD + '/.uploads/tmp',
    //uploadDir: process.env.PWD + '/.uploads/',
    //tmpDir: '/Users/federico/Documents/GitHub/natacion/.uploads/tmp',
    //uploadDir: '/Users/federico/Documents/GitHub/natacion/.uploads/',
    checkCreateDirectories: true //create the directories for you
  })
});