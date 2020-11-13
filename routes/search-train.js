require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/search-train', (req, res) => {
	server.query(`select s.id, s.name, t.type from stations s inner join transport t on s.transport_id = t.id where t.type = "train" AND name LIKE '%${req.query.search}%'`,
		function (err, train) {
			if (err) return console.log(err);
			return res.render('list-stations-train.ejs', { Train: train });
		}
	);
});
	
module.exports = router;
