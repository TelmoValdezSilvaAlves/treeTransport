const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('../views/index.ejs');
});

module.exports = router;