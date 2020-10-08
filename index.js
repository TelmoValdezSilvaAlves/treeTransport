require('dotenv').config();

const { PORT } = process.env;

// Mysql Connection
require('./configs/mysql');

const express = require('express');

//Routes
const Routes = require('./routes/routes');
const SearchMaps = require('./routes/maps');

//Routes - BUS
const StationsBus = require('./routes/stations-bus');
const StopsBus = require('./routes/stops-bus');
const SchedulesBus = require('./routes/schedules-bus');
const StationsTrains = require('./routes/stations-train');
const StationsSubmay = require('./routes/stations-submay');
const SchedulesDeparturesTrains = require('./routes/schedules-departures-train');
const SchedulesArrivalsTrains = require('./routes/schedules-arrivals-train');
const SchedulesSubmay = require('./routes/schedules-submay');
const SearchTrains = require('./routes/search-train');
const SearchSubmay = require('./routes/search-submay');

const app = express();

app.set('view engine', 'ejs')
	.use(express.static(__dirname + '/public/'))

	.use(Routes)

	// .use(SearchMaps)
	
	.use(StationsBus)

	.use(StopsBus)

	.use(SchedulesBus)

	.use(StationsTrains)

	.use(SchedulesDeparturesTrains)

	.use(SchedulesArrivalsTrains)

	.use(SearchTrains)

	.use(StationsSubmay)

	.use(SchedulesSubmay)

	.use(SearchSubmay)

	.listen(PORT, () => {
		console.log(`[SERVER RUNNING ON PORT ${PORT}]`);
	});
