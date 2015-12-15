var express = require('express');
var app = express();
var key = require('./key.js'); // your ipinfodb.com API key e.g. 'abcd'
var ipinfodb = require('.');

app.enable('trust proxy');

app.use(ipinfodb({key: key}));

app.get('/', function (req, res) {
  // IP info is now available in req.ipinfo
  res.json(req.ipinfo);
});


app.listen(3000);
