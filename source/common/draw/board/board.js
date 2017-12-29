/**
 * kirájzolja az aktuális pályát
 * @author sarkiroka on 2017.12.28.
 */
var canvas = require('../canvas');
var constants = require('../constants');
var debug = require('debug')('progbot:draw:board');
var tile = require('./tile');
var getSize = require('./get-size');
module.exports = function (board, withoutRobot) {
	var sizes = getSize(board);
	var leftTopX = canvas.centerX - Math.floor(sizes.x / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	var leftTopY = canvas.centerY - Math.floor(sizes.y / 2) * constants.boardItemSize - constants.boardItemSize / 2;
	debug('draw the board');
	canvas.ctx.fillStyle = '#eee';
	canvas.ctx.strokeStyle = '#000';
	if (board) {
		for (var i = 0; i < board.length; i++) {
			tile(board[i], withoutRobot);
		}
	}
	var boardPositionAndSize = {
		x: leftTopX,
		y: leftTopY,
		w: 2 * (canvas.centerX - leftTopX),
		h: 2 * (canvas.centerY - leftTopY)
	};
	//TODO el kéne menteneni itt is robottal a pályát aztán következő kirajzolásnál csak a mentettet venni. ha nincs mentett akkor rajzolni. játék végén meg törölni a mentést
	return boardPositionAndSize;
};
