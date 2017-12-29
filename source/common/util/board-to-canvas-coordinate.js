/**
 * kiszámolja hogy egy board koordináta hol van a canvason
 * a reverse pedig ennek fordítottját teszi: canvas koordinátát alakít át board koordinátává
 * @author sarkiroka on 2017.12.29.
 */
var canvas = require('../draw/canvas');
var constants = require('../draw/constants');
var getSize = require('../draw/board/get-size');
var state = require('../../game/state/index');
module.exports = function (x, y) {
	var board = state.getBoard();
	var sizes = getSize(board);
	var leftTopX = canvas.centerX - Math.floor(sizes.x / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	var leftTopY = canvas.centerY - Math.floor(sizes.y / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	var size = constants.boardItemSize - constants.boardItemMargin;
	var size2 = size * 0.5;
	return {
		x: leftTopX + x * constants.boardItemSize + size2,
		y: leftTopY + y * constants.boardItemSize + size2
	}
};
module.exports.reverse = function (canvasX, canvasY) {
	var board = state.getBoard();
	var sizes = getSize(board);
	var leftTopX = canvas.centerX - Math.floor(sizes.x / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	var leftTopY = canvas.centerY - Math.floor(sizes.y / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	var size = constants.boardItemSize - constants.boardItemMargin;
	var size2 = size * 0.5;
	return {
		x: Math.round((canvasX - leftTopX - size2) / constants.boardItemSize),
		y: Math.round((canvasY - leftTopY - size2) / constants.boardItemSize)
	};
};
