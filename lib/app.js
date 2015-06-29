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
		
})

.then((characters) => {

	for (let i = 0; i < 5; i++) {
		let character = characters[i]
		let template = renderCharacter(character)
		let $card = $(template) //creo los elementos
		$('.Battle-player').append($card)
	}
	
})

.catch((err) => {
	console.error(err)	
})

function renderCharacter(character) {
	return `
	<div class="Card">		
		<h2 class="Card-name">${character.name}</h2><img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="wolverine" class="Card-image"/>
		<div class="Card-description">${character.description}</div>
		<div class="Card-attack">500puntos de ataque</div>
	</div> ` 
}



