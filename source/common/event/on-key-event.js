/**
 *
 * @author sarkiroka on 2017.06.01.
 */
var onBackspace = require('./on/backspace');
var onEndOfGame = require('./on/end-of-game');
var onEndOfProgramming = require('./on/end-of-programming');
var onKey = require('./on/key');
module.exports = function (event) {
	event.preventDefault();
	switch (event.key) {
		case 'Escape':
			onEndOfGame();
			break;
		case 'Enter':
			onEndOfProgramming();
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
