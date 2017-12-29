/**
 * elmenti, törli, visszaállitja a képen látható pályát - a robot animációhoz nagyszerűen használható
 * @author sarkiroka on 2017.12.29.
 */
var canvas = require('../canvas');
var debug = require('debug')('progbot:draw:board:save');

var savedImage = null;
var savedPosition = null;

module.exports = function (positionAndSize) {
	if (savedImage || savedPosition) {
		console.warn('overwrite a saved image data');
	}
	savedImage = canvas.ctx.getImageData(positionAndSize.x, positionAndSize.y, positionAndSize.w, positionAndSize.h);
	savedPosition = {
		x: positionAndSize.x,
		y: positionAndSize.y
	}
};
module.exports.clear = function () {
	savedImage = null;
	savedPosition = null;
};
module.exports.restore = function () {
	canvas.ctx.putImageData(savedImage, savedPosition.x, savedPosition.y);
};
