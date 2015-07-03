var $ = require('jquery')
var page = require('page')

var template = require('./template.jade')


//page('ruta destino', lo que quiero que pase)
// page('/', function() {
// 	console.log('Estoy navegando al home')
// })
// El código anterior se puede mejorar:
page('/signin', signin)

function signin(ctx, next) {
	//inyecto el html de signin en el app-container
	$('.app-container').html(template())
	$('.Signin-button').on('click', function (event) {
		event.preventDefault()
		// obtengo el contenido del input
		var username = $('.Signin-name-input')[0].value
		if (!username) return alert('ingrese un nombre válido')
		//window.location = '/' //ordeno que vaya al home(ojo! vuelve al servidor)
		window.user = { username: username }
		page('/')
	})
}