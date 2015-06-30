var $ = window.jQuery
var MarvelApi = window.MarvelApi

var key = 'a548aee0bde874ea460773884934a865'
var api = new MarvelApi(key)

api.findSeries('avengers')
.then((serie) => {
	let serieImage = `url(${serie.thumbnail.path}.${serie.thumbnail.extension})`
	$('.Layout').css('background-image', serieImage)
	var characters = serie.characters.items
	var promises = []
	for (let character of characters){
		let promise = api.getResourceURI(character.resourceURI)
		promises.push(promise)
	}
	return Promise.all(promises)
})

//filtro  !!null -> false
.then((characters) => {
	return characters.filter((character) => !!character.thumbnail)
		// return !!character.thumbnail && !!character.description
		// quitamos con filter los personajes que no tienen thumbnail
})

.then((characters) => {
	characters = shuffle(characters)
	for (let i = 0; i < 5; i++) {
		let character = characters[i]
		let template = renderCharacter(character)
		let $card = $(template) //creo los elementos
		$('.Battle-player').append($card)
		$card.on('click', function(event) {
			let $this = $(this)
			let attack = $this.find('.Card-attack')
			console.log(attack.data('attack'))
		})

	}
	
})

.catch((err) => {
	console.error(err)	
})

function renderCharacter(character) {
	//generamos un número aleatorio entre 500 y 1000
	let attackPoint = Math.ceil(Math.random()* 500) + 500
	return `
	<div class="Card">		
		<h2 class="Card-name">${character.name}</h2><img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="wolverine" class="Card-image"/>
		<div class="Card-description">${character.description}</div>
		<div class="Card-attack" data-attack="${attackPoint}">${attackPoint} puntos de ataque</div>
	</div> ` 
}
function shuffle(arr) {
	for (var i = 0; i < arr.length; i++) {
		let tmp = arr[i]
		let index = Math.floor(Math.random() * arr.length - 1)
		arr[i] = arr[index]
		arr[index] = tmp

	}
	return arr
}



