var express = require('express')
var app = express() //listo express para ser utilizado como server
var http = require('http').Server(app)

var port = 8080

// este middleware se ejecuta si se llama explícitamente
// en la definición de la ruta
function middleHandler(req, res, next) {
	console.log('soy un middleware que anda por ahí')
}

// middleware que se va a ejecutar primero y siempre
app.use(function(req, res, next){
	console.log('soy el 1er middleware')
	next()
})

app.use(function(req, res, next){
	console.log('soy el 2do middleware')
	next()
})

app.get('/', middleHandler, function (req, res) {
	// res.sendFile(__dirname + '/index.html')
	console.log('peticion al home')
})

http.listen(port, function(err){
	if (err) return console.log(err)
	console.log('servidor escuchando en el puerto', 8080)
})