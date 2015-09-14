
/*
DROP TABLE users;
*/

CREATE TABLE image_table_meta_data (
	user_id int NOT NULL unique,
	image_name varchar(128) NOT NULL,
	image_size int
	/*date_added default NULL,*/
);

