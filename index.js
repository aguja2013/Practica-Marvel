var express = require('express')
var app = express() //listo express para ser utilizado como server
var http = require('http').Server(app)
var io =require('socket.io')(http)
var port = 8080


app.use('/public', express.static(__dirname + '/public'))//express.static es un middleware de express(dice: si te piden un archivo estaático, devolvelo!)
app.use('*', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})				

// app.get('*', function(req, res) {
	//redirijo 404
// })

io.on('connection', function(socket){
	console.log('user connected')

	socket.on('disconnect', function(){
		console.log('user disconnect')
	})
})

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg)
	})
})


http.listen(port, function(err){
	if (err) return console.log(err)
	console.log('servidor escuchando en el puerto', 8080)
})