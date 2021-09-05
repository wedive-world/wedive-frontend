var express = require('express');
var router = express.Router();
var path = require('path');

express().use(express.static(path.join(__dirname, 'public/mobile')));

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.sendFile(path.join(__dirname, '../public/mobile/index.html'));
});

module.exports = router;
