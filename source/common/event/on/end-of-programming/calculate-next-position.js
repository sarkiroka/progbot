/**
 * kiszámolja hogy hol van az adott százalékkal arrébb tett robot
 * @author sarkiroka on 2017.12.29.
 */
var constants = require('../../../draw/constants');

module.exports = function (startPosition, direction, percent) {
	if (percent > 1) {
		console.warn('percent is greater than one :(', percent);
		percent = 1;
	}
	if (percent < 0) {
		console.warn('percent is lower than zero :(', percent);
		percent = 0;
	}
	var retValue = Object.assign({}, startPosition);
	switch (direction) {
		case 'up': // forward
			switch (startPosition.direction) {
				case 0:
					retValue.y -= constants.boardItemSize * percent;
					break;
				case 90:
					retValue.x += constants.boardItemSize * percent;
					break;
				case 180:
					retValue.y += constants.boardItemSize * percent;
					break;
				case 270:
					retValue.x -= constants.boardItemSize * percent;
					break;
				default:
					console.error('wrong direction detected', startPosition);
			}
			break;
		case 'down': // backward
			switch (startPosition.direction) {
				case 0:
					retValue.y += constants.boardItemSize * percent;
					break;
				case 90:
					retValue.x -= constants.boardItemSize * percent;
					break;
				case 180:
					retValue.y -= constants.boardItemSize * percent;
					break;
				case 270:
					retValue.x += constants.boardItemSize * percent;
					break;
				default:
					console.error('wrong direction detected', startPosition);
			}
			break;
		case 'left': //turn left
			retValue.direction -= 90 * percent;
			break;
		case 'right': //turn right
			retValue.direction += 90 * percent;
			break;
		default:
			console.warn('unknown program instruction detected', direction);
	}
	// normalize direction
	while (retValue.direction >= 360) {
		retValue.direction -= 360;
	}
	while (retValue.direction < 0) {
		retValue.direction += 360;
	}
	return retValue;
};
