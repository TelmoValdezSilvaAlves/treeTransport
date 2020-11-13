require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/search-submay', (req, res) => {
	server.query(`select s.id, s.name, s.slug, t.type from stations s inner join transport t on s.transport_id = t.id where t.type = "submay" AND name LIKE '%${req.query.search}%'`,
		function (err, submay) {
			if (err) return console.log(err);
			return res.render('list-stations-submay.ejs', { Submay: submay });
		}
	);
});

module.exports = router;
