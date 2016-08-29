var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection',function(client){
	client.on('message', function (mes) {
    console.log(mes);
  });
	//clinet.on('message', function(data){
		//client.broadcast.emit('message',data);
		//console.log(data);
	//});
});

// server.on('message',function(data){
// 	console.log(data);
// });




//Sending ui files to client
app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname));


server.listen(8000);

console.log("listening on port 8000");