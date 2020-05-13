var express = require('express');
var controller = require('../controller/contactController');
var router = express.Router();

/* GET users listing. */
router.post('/add', controller.addContact);

module.exports = router;