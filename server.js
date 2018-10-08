'use strict'


var express = require( 'express' );
var app = express();
var port = process.env.PORT || 8090;

app.use(express.static('./public'));


app.get( '/', function( req, res ) {
  
  res.sendFile( __dirname + '/index.html');
  
});

var server = app.listen( port, function() {
  console.log( 'Server started, listening on ' + port );
})