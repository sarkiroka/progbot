/**
 * kiszámolja egy tábla méretét
 * @author sarkiroka on 2017.12.28.
 */
var debug = require('debug')('progbot:draw:board:get-size');
var zero = {x: 0, y: 0};
module.exports = function (board) {
	if (!board || !board.length) {
		debug('zero length board found', board);
		retValue = zero;
	} else {
		var minX = Infinity;
		var minY = Infinity;
		var maxX = -Infinity;
		var maxY = -Infinity;
		board.forEach(function (item) {
			if (item.x < minX) minX = item.x;
			if (item.x > maxX) maxX = item.x;
			if (item.y < minY) minY = item.y;
			if (item.y > maxY) maxY = item.y;
		});
		var retValue = {
			x: maxX - minX,
			y: maxY - minY
		};
		debug('found a board with size', retValue);
	}
	return retValue;
};
