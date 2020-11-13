require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-stops-bus/:routeNumber', function (req, res, routeNumber) {
	function numeros(){
		for (numero=0; numero <= 79; numero++){
			if(numero == 2){
				routeNumber = req.params.routeNumber;
				var base_url = 'https://carris.tecmic.com/api/v2.9/Routes';
				var url = base_url + '/' + routeNumber;
				var request = require('request');
				request(url, function (error, response, body) {
					if (!error && response.statusCode == 200) {
						const bus = JSON.parse(body);
						return res.render('list-stops-bus.ejs', { bus });
					}
				});	
			}else if(numero == 70){
				routeNumber = req.params.routeNumber;
				var base_url = 'https://carris.tecmic.com/api/v2.9/Routes';
				var url = base_url + '/' + '70' + routeNumber;
				var request = require('request');
				request(url, function (error, response, body) {
					if (!error && response.statusCode == 200) {
						const bus = JSON.parse(body);
						return res.render('list-stops-bus.ejs', { bus });
					}
				});
			}else if(numero == 7){
				routeNumber = req.params.routeNumber;
				var base_url = 'https://carris.tecmic.com/api/v2.9/Routes';
				var url = base_url + '/' + '7' + routeNumber;
				var request = require('request');
				request(url, function (error, response, body) {
					if (!error && response.statusCode == 200) {
						const bus = JSON.parse(body);
						return res.render('list-stops-bus.ejs', { bus });
					}
				});
			}
		}
	}

	numeros();
});

module.exports = router;
