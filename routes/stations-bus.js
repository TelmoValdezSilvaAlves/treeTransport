require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-stations-bus', function (req, res) {
	var base_url = 'https://carris.tecmic.com/api/v2.9/Routes';
	var request = require('request');
	request(base_url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const bus = JSON.parse(body);
			return res.render('list-stations-bus.ejs', { bus });
		}
	});
});

module.exports = router;
