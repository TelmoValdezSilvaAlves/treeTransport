require('dotenv').config();

const mysql = require('mysql')

const {
	MYSQL_LOCAL_HOST,
	MYSQL_LOCAL_DB,
	MYSQL_LOCAL_USER,
	MYSQL_LOCAL_PASSWORD
} = process.env;

global.server

global.server = mysql.createPool({
	host: MYSQL_LOCAL_HOST,
	user: MYSQL_LOCAL_USER,
	password: MYSQL_LOCAL_PASSWORD,
	database: MYSQL_LOCAL_DB,
	connectionLimit: 10, 
    connectTimeout: 10000,
    waitForConnections: true, 
    queueLimit: 0
});

module.exports = server.getConnection(function (err) {
	if(err) {
		console.log(err)
		return
	}else {
		console.log('[CONNECTED TO THE DATABASE]');
	}
});