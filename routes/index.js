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
	app.get('/index-bubble.html',function(req,res){
	      res.sendfile("index-bubble.html");
	});

	app.get('/index-bar.html',function(req,res){
	      res.sendfile("index-bar.html");
	});
	app.get('/css/stacked.css',function(req,res){
	      res.sendfile("css/stacked.css");
	});
	app.get('/css/bar.css',function(req,res){
	      res.sendfile("css/bar.css");
	});
	app.get('/js_scripts/bar.js',function(req,res){
		console.log("sent bar.js");
	      res.sendfile("js_scripts/bar.js");
	});
	app.get('/js_scripts/stacked.js',function(req,res){
		console.log("sent stacked.js");
	      res.sendfile("js_scripts/stacked.js");
	});

	
	// Hello world
	app.get('/hello', function (req, res) {
	  debugger;
	  res.send('Hello World!');

	});

	app.get('/raw_data/data.tsv', function (req, res){
		var tsv = fs.readFileSync("./raw_data/data.tsv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/raw_data/data-stacked.tsv', function (req, res){
		var tsv = fs.readFileSync("./raw_data/data-stacked.tsv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/raw_data/os-data.csv', function (req, res){
		var tsv = fs.readFileSync("./raw_data/os-data.csv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/raw_data/tenant_aug_2015.csv', function (req, res){
		var tsv = fs.readFileSync("./raw_data/tenant_aug_2015.csv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/raw_data/tenant_aug_2015_top_30.csv', function (req, res){
		var tsv = fs.readFileSync("./raw_data/tenant_aug_2015_top_30.csv");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});

	app.get('/js_scripts/d3-min.js', function (req, res){
		console.log("D3 sent");
		var tsv = fs.readFileSync("./js_scripts/d3-min.js");
	    res.writeHead(200, {'Content-Type': 'text/plain' });
	    res.end(tsv, 'charset=utf-8');   
	});
	app.get('/js_scripts/d3.tip.v0.6.3.js', function (req, res){
		console.log("D3 Tips sent");
		var tsv = fs.readFileSync("./js_scripts/d3.tip.v0.6.3.js");
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