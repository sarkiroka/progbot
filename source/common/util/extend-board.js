/**
 * kiterjeszti a board méretét egy-egy cellával körbe
 * @author sarkiroka on 2017.12.29.
 */
var canvas = require('../draw/canvas');
var constants = require('../draw/constants');
var debug = require('debug')('progbot:draw:util:extend-board');

module.exports = function (positionAndSize) {
	var retValue = Object.assign({}, positionAndSize);
	retValue.x = Math.max(0, retValue.x - constants.boardItemSize);
	retValue.y = Math.max(0, retValue.y - constants.boardItemSize);
	retValue.w = Math.min(canvas.width, retValue.w + 2 * constants.boardItemSize);
	retValue.h = Math.min(canvas.height, retValue.h + 2 * constants.boardItemSize);
	debug('extend board from %o to %o', positionAndSize, retValue);
	return retValue;
};
