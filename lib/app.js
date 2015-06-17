var $ = window.jQuery

var key = 'apikey=a548aee0bde874ea460773884934a865'
var url = 'http://gateway.marvel.com/v1/public/series?title=avengers&apikey=a548aee0bde874ea460773884934a865'

Promise.resolve($.get(url))
.then(function(results) {
	var characters = results.data.results[0].characters.items
	var promises = []
	for (var i in characters){
		var character = characters[i]
		var characterUrl = `${character.resourceURI}?${key}`
		promises.push(Promise.resolve($.get(characterUrl)))
	}
	return Promise.all(promises)
})

.then(function(characters){
	debugger
})

.catch(function(err){
	debugger
	console.error(err)
	
})

