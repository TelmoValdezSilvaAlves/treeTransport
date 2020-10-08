require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-stations-submay', function (req, res) {
	server.query(`select s.id, s.name, t.type, s.slug from stations s inner join transport t on s.transport_id = t.id where t.type = "submay"`,
		function (err, submay) {
			if (err) return console.log(err);
				return res.render('list-stations-submay.ejs', { Submay: submay });
		}
	);
});

module.exports = router;
