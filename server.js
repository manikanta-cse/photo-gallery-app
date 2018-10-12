'use strict'

var express = require('express');
var app = express();

const PORT =  process.env.PORT || 8090;
const HOST = '0.0.0.0';

app.use(express.static('./public'));


app.get('/', function (req, res) {

  res.sendFile(__dirname + '/index.html');

});

require('./server/routes')(app);

app.listen(PORT, HOST);
console.log(`Server started , Running on http://${HOST}:${PORT}`);
