/**
 * animál egyetlen program utasítást
 * @author sarkiroka on 2017.12.29.
 */
var calculateNextPosition = require('./calculate-next-position');
var drawRobot = require('../../../draw/robot');
var gameConstants = require('../../../../game/constants');
var saveBoard = require('../../../draw/board/save');

var animationTime = gameConstants.robotStepTimeSeconds;
var fps = 25;
var delay = 1000 / fps; // animation speed

var cnt = 0;

module.exports = function (position, instruction, callback) {
	cnt++;
	var startTime = Date.now();
	inner();

	function inner() {
		var currentTime = Date.now();
		var elapsedTime = currentTime - startTime;
		var elapsedPercent = Math.min(1, elapsedTime / animationTime);
		var nextPosition = calculateNextPosition(position, instruction, elapsedPercent);
		saveBoard.restore();
		drawRobot(nextPosition);

		if (elapsedPercent < 1) {
			setTimeout(inner, delay);
		} else {
			callback(nextPosition);
		}
	}
};
