/**
 * kirajzol a pályáról egyetlen pályaelemet
 * @author sarkiroka on 2017.12.28.
 */
var canvas = require('../canvas');
var constants = require('../constants');
var board2CanvasCoordinate = require('../../util/board-to-canvas-coordinate');
var boardConstants = require('../../../game/board/constants');
var drawRobot = require('../robot');

var box = document.getElementById('box');

module.exports = function (tile, withoutRobot) {
	var ctx = canvas.ctx;
	var canvasCoordinates = board2CanvasCoordinate(tile.x, tile.y);
	var x = canvasCoordinates.x;
	var y = canvasCoordinates.y;
	var size = constants.boardItemSize - constants.boardItemMargin;
	var size05 = size * 0.05;
	var size90 = size * 0.9;
	var size80 = size * 0.8;
	var size40 = size * 0.4;
	var size20 = size * 0.2;
	var size2 = size * 0.5;
	ctx.fillRect(x - size2, y - size2, size, size);
	ctx.strokeRect(x - size2, y - size2, size, size);
	switch (tile.type) {
		case boardConstants.X:
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(Math.random() * 3 * Math.PI / 180);
			ctx.drawImage(box, -size2 + size05, -size2 + size05, size90, size90);
			ctx.restore();
			break;
		case boardConstants.S:
			if (!withoutRobot) {
				drawRobot({x: x, y: y, direction: 0});
			}
			break;
		case boardConstants.E:
			ctx.save();
			ctx.translate(x, y);
			ctx.beginPath();
			ctx.strokeStyle = '#000';
			ctx.lineWidth = size05;
			ctx.arc(0, 0, size40, 0, Math.PI * 2);
			ctx.stroke();
			ctx.beginPath();
			ctx.strokeStyle = '#D00';
			ctx.fillStyle = '#D00';
			ctx.arc(0, 0, 2 * size05, 0, Math.PI * 2);
			ctx.stroke();
			ctx.fill();
			ctx.beginPath();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#000';
			ctx.moveTo(0, -size40);
			ctx.lineTo(0, size40);
			ctx.moveTo(-size40, 0);
			ctx.lineTo(size40, 0);
			ctx.moveTo(-size20, -size05);
			ctx.lineTo(-size20, size05);
			ctx.moveTo(size20, -size05);
			ctx.lineTo(size20, size05);
			ctx.lineWidth = 0.5;
			ctx.moveTo(-size05, size20);
			ctx.lineTo(size05, size20);
			ctx.moveTo(-size05, -size20);
			ctx.lineTo(size05, -size20);
			ctx.stroke();
			ctx.restore();
			break;
	}
};
