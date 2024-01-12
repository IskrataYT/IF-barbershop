const express = require('express');
const router = express.Router();
const addHour = require('./controllers/addHour').addHour;
const fetchTimes = require('./controllers/fetchRequests').fetchTimes;



router.post('/api/appointment', addHour)
router.post('/api/getTimes', fetchTimes)

// Serve static files from the React app build directory


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
module.exports = router;