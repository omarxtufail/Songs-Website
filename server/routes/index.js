var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Portfolio' ,
     section:"Umar Shahbaz"});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
     title: 'Portfolio' ,
     section:"Umar Shahbaz"});
});


/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {
     title: 'Contact' ,
     section:"Contact me!"});
});


module.exports = router;
 