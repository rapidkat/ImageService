var fs = require("fs");
var pg = require("pg");
var queryDb = require("../db/queryDb.js");


module.exports.set = function(app) {
	// Root page
	app.get('/',function(req,res){
	      res.sendfile("index.html");
	});
	app.get('/index-stacked.html',function(req,res){
	      res.sendfile("index-stacked.html");
	});

	// Hello world
	app.get('/hello', function (req, res) {
	  debugger;
	  res.send('Hello World!');

	});

	app.get('/data.tsv', function (req, res){
		var tsv = fs.readFileSync("./data.tsv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/data-stacked.tsv', function (req, res){
		var tsv = fs.readFileSync("./data-stacked.tsv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});

	//
	app.get('/user_meta_data', function(req, res)
	{
		debugger;
		var id = req.query.id;
		var images = queryDb.getImagesByUser(pg, id);
		res.send("HOHOO " + images);
		// Make a DB call to 
		// Hit the DB for the user ID.
		//var user_id = req.
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