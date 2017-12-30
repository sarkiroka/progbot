/**
 * minden billentyűzetesemények elosztója
 * @author sarkiroka on 2017.06.01.
 */
var onBackspace = require('./on/backspace');
var onEscape = require('./on/escape');
var onEndOfProgramming = require('./on/end-of-programming/end-of-programming');
var onKey = require('./on/key');
var onF = require('../../game/on/f');

module.exports = function (event) {
	event.preventDefault();
	switch (event.key) {
		case 'Escape':
			onEscape();
			break;
		case 'Enter':
			onEndOfProgramming();
			break;
		case 'F':
		case 'f':
			onF();
			break;
		case 'ArrowLeft':
		case 'ArrowRight':
		case 'ArrowUp':
		case 'ArrowDown':
			onKey(event.key.replace('Arrow', '').toLowerCase());
			break;
		case 'Backspace':
			onBackspace();
			break;
		case 'F5':
			location.reload();
			break;
		default:
			console.log('unhandled keyboard event', event);
	}
};
