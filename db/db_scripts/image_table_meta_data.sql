
/*
CREATE TABLE image_table_meta_data;
Goes into the default postgre DB
*/

CREATE TABLE image_table_meta_data (
	user_id int NOT NULL unique,
	image_name varchar(128) NOT NULL,
	image_size int
);

