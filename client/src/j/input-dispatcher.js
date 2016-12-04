/**
 * @author sarkiroka on 2016.12.25.
 */
var constants = require('./constants');
module.exports = function (config) {
	return function (code) {
		switch (code) {
			case 'Enter':
			case 'NumpadEnter':
				config.start();
				break;
			case 'ArrowUp':
				config.move(constants.DIRECTIONS.FORWARD);
				break;
			case 'ArrowRight':
				config.move(constants.DIRECTIONS.RIGHT);
				break;
			case 'ArrowLeft':
				config.move(constants.DIRECTIONS.LEFT);
				break;
			default:
				console.warn('unhandled keyboard event', code);
		}
	};
};
