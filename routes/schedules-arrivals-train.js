require('dotenv').config();

const express = require('express');
const router = express.Router();

// Mysql Connection
require('../configs/mysql');

router.get('/list-schedules-arrivals-train/:id', function (req, res, id) {
        function getDateTime() {
            var now     = new Date(); 
            var hour    = now.getHours();
            var minute  = now.getMinutes();
            var second  = now.getSeconds();  
            if(hour.toString().length == 1) {
                hour = '0'+hour;
            }
            
            if(minute.toString().length == 1) {
                minute = '0'+minute;
            }

            if(second.toString().length == 1) {
                second = '0'+second;
            }   

            var dateTime = hour+':'+minute+':'+second;   
                return dateTime;
        }
    
        const dateTime = require('node-datetime')
        var dt = dateTime.create();
        var data = dt.format("Y-m-d");
        id = req.params.id
        var base_url = "https://www.infraestruturasdeportugal.pt/negocios-e-servicos/horarios";
        var url = base_url + "/chegadas/" + id + "/" + data + "T" + getDateTime() + "+" + data + "T23:59:59";
        var request = require("request");
        request(url,function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const train = JSON.parse(body);
                return res.render("list-schedules-arrivals-train.ejs", { train })
            }
        }
    );
})

module.exports = router;
