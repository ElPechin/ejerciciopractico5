var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var cors = require('cors');

/* GET home page. */
router.get('/', cors() ,function(req, res, next) {
  res.sendFile(resolve('views/index.html'))
});

/* GET home page. */
router.get('/resultados', cors() ,function(req, res, next) {
  res.sendFile(resolve('views/resultados.html'))
});

module.exports = router;
