var express = require('express');
var router = express.Router();
const searchControllers = require('../controllers/searchController');

router.get('/:searchString', searchControllers.get);

module.exports = router;
