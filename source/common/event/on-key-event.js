/**
 *
 * @author sarkiroka on 2017.06.01.
 */
var onBackspace = require('./on/backspace');
var onEndOfGame = require('./on/end-of-game');
module.exports = function (event) {
	event.preventDefault();
	switch (event.key) {
		case 'Escape':
			onEndOfGame();
			break;
		case 'Enter':
			drawCurrentPosition();
			checkResult(function (success) {
				if (success) {
					currentLevel++;
					win();
					reDraw();
				} else {
					loose();
				}
				setDefaults();
			});
			break;
		case 'ArrowLeft':
		case 'ArrowRight':
		case 'ArrowUp':
		case 'ArrowDown':
			program.push(event.key.replace('Arrow', '').toLowerCase());
			reDraw();
			break;
		case 'Backspace':
			program.pop();
			reDraw();
			break;
		case 'F5':
			location.reload();
			break;
		default:
			console.log('unhandled keyboard event', event);
	}
};
