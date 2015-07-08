var express = require('express')
var app = express() //listo express para ser utilizado como server
var http = require('http').Server(app)

var port = 8080


app.use('/public', express.static(__dirname + '/public'))//express.static es un middleware de express(dice: si te piden un archivo estaático, devolvelo!)
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.get('*', function(req, res) {
	//redirijo 404
})

http.listen(port, function(err){
	if (err) return console.log(err)
	console.log('servidor escuchando en el puerto', 8080)
})