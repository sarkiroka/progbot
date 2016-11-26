/**
 * @author sarkiroka on 2016.12.25.
 */
var DIRECTIONS = require('./directions');
module.exports = function (config) {
	return function (code) {
		switch (code) {
			case 'ArrowUp':
				config.move(DIRECTIONS.FORWARD);
				break;
			case 'ArrowRight':
				config.move(DIRECTIONS.RIGHT);
				break;
			case 'ArrowLeft':
				config.move(DIRECTIONS.LEFT);
				break;
			default:
				console.warn('unhandled keyboard event', code);
		}
	};
};
