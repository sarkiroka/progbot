/**
 * animál egyetlen program utasítást
 * @author sarkiroka on 2017.12.29.
 */
var calculateNextPosition = require('./calculate-next-position');
var calculateNextTile = require('./calculate-next-tile');
var debug = require('debug')('progbot:event:on:end-of-programming:animate-step');
var drawRobot = require('../../../draw/robot');
var fallDown = require('./fall-down');
var gameConstants = require('../../../../game/constants');
var isFree = require('../../../../game/board/is-free');
var saveBoard = require('../../../draw/board/save');

var animationTime = gameConstants.robotStepTimeSeconds * 1000;
var fps = 25;
var delay = 1000 / fps; // animation speed

module.exports = function (position, instruction, callback) {
	var nextTile = calculateNextTile(position, instruction);
	var canVisit = isFree(nextTile);
	var startTime = Date.now();
	var needMoving = canVisit == null || canVisit == true;
	debug('need to move?', needMoving);
	move();

	function move() {
		var currentTime = Date.now();
		var elapsedTime = currentTime - startTime;
		var elapsedPercent = Math.min(1, elapsedTime / animationTime);
		var nextPosition = calculateNextPosition(position, instruction, needMoving ? elapsedPercent : Math.random() * 0.1);
		saveBoard.restore();
		drawRobot(nextPosition);

		if (elapsedPercent < 1) {
			setTimeout(move, delay);
		} else {
			if (needMoving) {
				if (canVisit == null) {
					fallDown(nextPosition, function () {
						callback(nextPosition, true)
					});
				} else {
					callback(nextPosition);
				}
			} else {
				saveBoard.restore();
				drawRobot(position);
				callback(position);
			}
		}
	}
};
