var fs = require("fs");

module.exports.set = function(app) {
	// Root page
	app.get('/',function(req,res){
	      res.sendfile("index.html");
	});
	// Hello world
	app.get('/hello', function (req, res) {
	  res.send('Hello World!');
	});
	// Mapping everything in images to 
	app.get('/images/*', function(req,res){
	  var path = req.path;
	  if(path && path.length > 0)
	  {
	    var imageNameIndex = path.lastIndexOf("/");
	    var imageName = path.substr(imageNameIndex, req.path.length);
	    console.log(imageName);
	    var image = fs.readFileSync("./uploads"+imageName);
	    res.writeHead(200, {'Content-Type': 'image/png' });
	    res.end(image, 'binary');   
	  }
	  else
	  {
	    res.send('Image not found!');    
	  }
	});
}