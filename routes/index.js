var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mehndi for Brides', sitelogo:'Bridesart' });
});

/* GET home page. */
router.get('/index-1', function(req, res, next) {
  res.render('index-1', { title: 'Mehndi for Brides' });
});


module.exports = router;
