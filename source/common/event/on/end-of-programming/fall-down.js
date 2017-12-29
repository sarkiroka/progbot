/**
 * lezuhanás
 * @author sarkiroka on 2017.12.29.
 */
var debug = require('debug')('progbot:event:on:end-of-programming:fall-down');
var drawRobot = require('../../../draw/robot');
var gameConstants = require('../../../../game/constants');
var saveBoard = require('../../../draw/board/save');

var animationTime = gameConstants.robotStepTimeSeconds * 1000;
var fps = 25;
var delay = 1000 / fps; // animation speed

module.exports = function (position, callback) {
	var startTime = Date.now();
	var zoom = 1;
	fall();

	function fall() {
		var currentTime = Date.now();
		var elapsedTime = currentTime - startTime;
		var elapsedPercent = Math.min(1, elapsedTime / animationTime);
		var zoom = 1 - elapsedPercent;

		saveBoard.restore();
		drawRobot(position, zoom);

		if (elapsedPercent < 1) {
			setTimeout(fall, delay);
		} else {
			callback();
		}

	}
};
