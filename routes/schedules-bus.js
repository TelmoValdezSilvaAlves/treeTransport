require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-schedules-bus/:publicId', function (req, res, publicId) {
	publicId = req.params.publicId;
	var base_url = 'https://carris.tecmic.com/api/v2.9/Estimations/busStop/';
	var url = base_url + publicId + '/top/4';
	var request = require('request');
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
            const busSchedules = JSON.parse(body);  
			return res.render('list-schedules-bus.ejs', { busSchedules });
		}
	});
});

module.exports = router;
