/**
 * eldönti hogy egy canvas koordináta az a célban van-e vagy sem
 * @author sarkiroka on 2017.12.29.
 */
var board2CanvasCoordinate = require('../../../util/board-to-canvas-coordinate');
var constants = require('../../../../game/board/constants');
var state = require('../../../../game/state/index');
module.exports = function (canvasCoordinate) {
	var boardCoordinate = board2CanvasCoordinate.reverse(canvasCoordinate.x, canvasCoordinate.y);
	var board = state.getBoard();
	var endTile = board.find(tile=>tile.type == constants.E);
	var retValue = true;
	if (!endTile) {
		console.error('there is no target tile in board');
		retValue = false;
	} else {
		retValue = endTile.x == boardCoordinate.x && endTile.y == boardCoordinate.y;
	}
	return retValue;
};
