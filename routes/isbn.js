const express = require('express');
const router = express.Router();
const isbnControllers = require('../controllers/isbnController');

/* GET users listing. */
router.get('/:id', isbnControllers.get);

module.exports = router;
