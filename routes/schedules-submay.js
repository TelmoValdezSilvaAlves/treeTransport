require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-schedules-submay/:slug', function (req, res, slug) {
	slug = req.params.slug;
	var base_url = 'https://api.metrolisboa.pt:8243/estadoServicoML/1.0.1/tempoEspera/Estacao';
	var url = base_url + '/' + slug;
	var request = require('request');
	request({url,
			headers: {
				Authorization: 'Bearer 6be8783e-63d1-3b75-9e45-887cb6ed970d',
			},
			rejectUnauthorized: true,
		},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
				const submay = JSON.parse(body);
                return res.render('list-schedules-submay.ejs', {submay});
            }
        }
	);
});

module.exports = router;