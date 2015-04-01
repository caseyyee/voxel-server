// var server = require('./')()
// var port = 8080
// server.listen(port)
// console.log('Listening on ', port, ' open http://localhost:', port)


// Webserver.
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = 8080;

var voxelServer = require('./')({ server: server });

app.use(express.static(__dirname));

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
