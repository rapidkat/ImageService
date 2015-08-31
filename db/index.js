var pg = require("pg");

module.exports.set = function(app) {

  var conString = "postgres://postgres:TheBaliYellowWave@localhost/test_database";

  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], function(err, result) {
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
