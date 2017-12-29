/**
 * when program is done
 * @author sarkiroka on 2017.12.27.
 */
var animateProgram = require('./animate-program');
var checkResult = require('./check-result');
var drawBoard = require('../../../draw/board/board');
var drawResult = require('../../../draw/result');
var extendBoard = require('../../../util/extend-board');
var gameConstants = require('../../../../game/constants');
var redraw = require('../../../draw/redraw');
var saveBoard = require('../../../draw/board/save');
var state = require('../../../../game/state/index');

var withoutRobot = true;
var hideResultTimer = -1;
var resultIsSuccess = null;
var nextLevelLoaded = false;

module.exports = function () {
	if (state() == state.RESULT_ANIMATION) {
		publicCancelResult();
	} else if (state() == state.IDLE) {
		state(state.CHECK_ANIMATION);
		nextLevelLoaded = false;
		var boardPositionAndSize = drawBoard(state.getBoard(), withoutRobot);
		boardPositionAndSize = extendBoard(boardPositionAndSize);
		saveBoard(boardPositionAndSize);
		animateProgram(function (err, currentCoordinates) {
			if (err) {
				console.error(err);
			}
			setTimeout(function () {
				state(state.RESULT_ANIMATION);
				saveBoard.clear();
				animateProgram.reset();
				resultIsSuccess = checkResult(currentCoordinates);
				drawResult(resultIsSuccess);
				if (resultIsSuccess) {
					state.levelUp();
					state.loadBoard(function () {
						nextLevelLoaded = true;
						hideResultTimer = setTimeout(cancelResult, gameConstants.resultTimeSeconds * 1000);
					});
				} else {
					hideResultTimer = setTimeout(cancelResult, gameConstants.resultTimeSeconds * 1000);
				}
			}, gameConstants.beforeResultTimeSeconds * 1000);
		});
	} else {
		console.warn('don\'t touch the keyboard while animating!!', state());
	}
};
module.exports.cancelResult = publicCancelResult;
function publicCancelResult() {
	if (!resultIsSuccess || nextLevelLoaded) {
		clearTimeout(hideResultTimer);
		cancelResult();
	} else {
		//TODO beep
	}
};
function cancelResult() {
	state(state.IDLE);
	redraw();
}
