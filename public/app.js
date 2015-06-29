'use strict';

var $ = window.jQuery;
var MarvelApi = window.MarvelApi;

var key = 'a548aee0bde874ea460773884934a865';
var api = new MarvelApi(key);

api.findSeries('avengers').then(function (serie) {
	var serieImage = 'url(' + serie.thumbnail.path + '.' + serie.thumbnail.extension + ')';
	$('.Layout').css('background-image', serieImage);
	var characters = serie.characters.items;
	var promises = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var character = _step.value;

			var promise = api.getResourceURI(character.resourceURI);
			promises.push(promise);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return Promise.all(promises);
})

//filtro  !!null -> false
.then(function (characters) {
	return characters.filter(function (character) {
		return !!character.thumbnail;
	})
	// return !!character.thumbnail && !!character.description

	;
}).then(function (characters) {

	for (var i = 0; i < 5; i++) {
		var character = characters[i];
		var template = renderCharacter(character);
		var $card = $(template); //creo los elementos
		$('.Battle-player').append($card);
	}
})['catch'](function (err) {
	console.error(err);
});

function renderCharacter(character) {
	return '\n\t<div class="Card">\t\t\n\t\t<h2 class="Card-name">' + character.name + '</h2><img src="' + character.thumbnail.path + '.' + character.thumbnail.extension + '" alt="wolverine" class="Card-image"/>\n\t\t<div class="Card-description">' + character.description + '</div>\n\t\t<div class="Card-attack">500puntos de ataque</div>\n\t</div> ';
}