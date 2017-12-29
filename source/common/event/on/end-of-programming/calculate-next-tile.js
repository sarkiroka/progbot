/**
 * kiszámitja és visszaadja a tábla azon elemét, ahova lépne az utasítás után
 * @author sarkiroka on 2017.12.29.
 */
var board2canvasCoordinate = require('../../../util/board-to-canvas-coordinate');
var state = require('../../../../game/state/index');

module.exports = function (position, instruction) {
	var board = state.getBoard();
	var currentTileCoordinate = board2canvasCoordinate.reverse(position.x, position.y);
	var targetCoordinate = Object.assign({}, currentTileCoordinate);
	var d = 0;
	if (instruction == 'up') {//TODO az up/down stb szavakat kiszervezni egy konstansba
		d = 1;
	} else if (instruction == 'down') {
		d = -1;
	}
	if (d) {
		switch (position.direction) {
			case 0:
				targetCoordinate.y -= d;
				break;
			case 90:
				targetCoordinate.x += d;
				break;
			case 180:
				targetCoordinate.y += d;
				break;
			case 270:
				targetCoordinate.x -= d;
				break;
		}
	}
	var retValue = board.find(tile=>tile.x == targetCoordinate.x && tile.y == targetCoordinate.y);
	return retValue;
};
