function QueryDB() {
  if (!(this instanceof QueryDB)) {
    return new QueryDB();
  }
};

QueryDB.prototype.getImagesByUser = function getImagesByUser(pg)
{
  pg.connect(this.getConnectionString(true), function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('select * from image_table_meta_data where user_id = $1', ['0'], function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log("Testing output" + result.rows[0].image_name);
    });
  });
};
QueryDB.prototype.insertImageMetaDataByUser = function insertImageMetaDataByUser(pg, file)
{
  pg.connect(this.getConnectionString(true), function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT into image_table_meta_data (user_id, image_name, image_size) VALUES ($1, $2, $3)', ['0', file.name, file.size], function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log("Testing insert:: " + result);
    });
  });

};

QueryDB.prototype.getConnectionString = function getConnectionString(isLocalDB)
{
    return (isLocalDB ? "postgres://postgres:TheBaliYellowWave@localhost/postgres" 
      : "postgres://hajfmugkeafvqa:ajFHBeHEKE633YRINEL2ZBzcOD@ec2-54-197-245-93.compute-1.amazonaws.com:5432/dfjrml8o3kfu46?ssl=true");
};
module.exports = module = new QueryDB();
