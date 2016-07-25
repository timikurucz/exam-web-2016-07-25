'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(express.static('./client'));

var decrypt = require('./decrypt');

app.post ('/decode', function(req, res) {
  decrypt.textDecoder(req.body.text, req.body.shift, function(err, rows){
    if (err) {
     res.status(400).json(err);
    } else {
     res.send({status: 'ok', text: rows});
    }
  });
});

app.listen(3000);
