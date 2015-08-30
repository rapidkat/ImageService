/*Define dependencies.*/

var express=require("express");
var multer=require('multer');
var fs = require("fs");
var app = express();
var done = false;

app.set('port', (process.env.PORT || 5000));

/*Configuring multer.*/
app.use(multer({ dest: './uploads/',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

/*Handling routes.*/
var routes = require('./routes');
routes.set(app);

/* Todo clean this up and put in routes, but pass in done*/
app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});


/*Run the server.*/
app.listen(app.get('port'),function(){
    console.log("Working on port " + app.get('port'));
});