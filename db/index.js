var pg = require("pg");

module.exports.set = function(app) {

  var conString = "postgres://postgres:TheBaliYellowWave@localhost/test_database";
  var herokuConnectionString = "postgres://hajfmugkeafvqa:ajFHBeHEKE633YRINEL2ZBzcOD@ec2-54-197-245-93.compute-1.amazonaws.com:5432/dfjrml8o3kfu46?ssl=true";

  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['55'], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log("Testing output" + result.rows[0].number);
      //output: 1
    });
  });
}


