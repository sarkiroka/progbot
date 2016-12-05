/**
 * @author sarkiroka on 2016.12.25.
 */
var constants = require('./constants');
module.exports = function (dispatcher) {
	return function (code) {
		switch (code) {
			case 'Enter':
			case 'NumpadEnter':
				dispatcher.start();
				break;
			case 'ArrowUp':
				dispatcher.move(constants.DIRECTIONS.FORWARD);
				break;
			case 'ArrowRight':
				dispatcher.move(constants.DIRECTIONS.RIGHT);
				break;
			case 'ArrowLeft':
				dispatcher.move(constants.DIRECTIONS.LEFT);
				break;
			default:
				console.warn('unhandled keyboard event', code);
		}
	};
};
