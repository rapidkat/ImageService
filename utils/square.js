// square.js

function Square(width) {

  if (!(this instanceof Square)) {
    return new Square(width);
  }

  this.width = width;
};

Square.prototype.addWidth = function addWidth(newWidth)
{
	this.width = newWidth;
};
Square.prototype.area = function area() {
  return Math.pow(this.width, 2);
};


module.exports = module = new Square();
/*
module.exports.set = function(app) {
	
	app.insertDBEntry= function(file, pg)
	{
    var conString = "postgres://postgres:TheBaliYellowWave@localhost/test_database";

    pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT INTO image_table_meta_data (user_id, image_name, image_size) VALUES ($1, $2, 100)', [0, file.originalname], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      //console.log("Testing output" + result.rows[0].number);
      //output: 1
    });
	};
}

*/

