/**
 * kirájzolja az aktuális pályát
 * @author sarkiroka on 2017.12.28.
 */
var debug = require('debug')('progbot:draw:board');
var getSize = require('./get-size');
module.exports = function (board) {
	var sizes = getSize(board);
	var size=Math.max(sizes.x,sizes.y);
	debug('draw the board');
};
