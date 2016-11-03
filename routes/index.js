var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Otvori novu stranicu */
router.get('/NovaStranica', function(req, res, next) {
  res.render('NovaStranica', { title: 'NovaStranica' });
});

module.exports = router;
