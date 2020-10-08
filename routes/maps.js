require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/maps', function (req, res) {
	var base_url = 'https://carris.tecmic.com/api/v2.8/vehicleStatuses';
	var request = require('request');
	request(base_url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			return res.render('maps.ejs', { markersBus: JSON.stringify(body) });
		}
	});
});

module.exports = router;