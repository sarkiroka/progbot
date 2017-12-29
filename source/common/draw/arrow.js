/**
 * kirajzolja a nyilat
 * @author sarkiroka on 2017.12.28.
 */
var canvas = require('./canvas');
var constants = require('./constants');
var debug = require('debug')('progbot:draw:arrow');

var angles = {
	left: Math.PI * 270 / 180,
	up: Math.PI * 0 / 180,
	right: Math.PI * 90 / 180,
	down: Math.PI * 180 / 180
};
var gradient = null;

module.exports = function (x, y, direction, size, highlight) {
	var size90 = size * 0.45;
	var size50 = size * 0.25;
	var size40 = size * 0.2;
	var size10 = size * 0.05;
	var ctx = canvas.ctx;

	debug('draw %s arrow', direction);
	ctx.save();

	ctx.translate(x, y);
	ctx.rotate(angles[direction]);
	ctx.beginPath();
	if (highlight) {
		var highlightGradient = ctx.createLinearGradient(0, size90, 0, -size90);
		highlightGradient.addColorStop(0, constants.arrowHighlightGradiendStartColor);
		highlightGradient.addColorStop(1, constants.arrowHighlightGradiendEndColor);
		ctx.fillStyle = highlightGradient;
	} else {
		if (!gradient) {
			gradient = ctx.createLinearGradient(0, size90, 0, -size90);
			gradient.addColorStop(0, constants.arrowGradientStartColor);
			gradient.addColorStop(1, constants.arrowGradientEndColor);
		}
		ctx.fillStyle = gradient;
	}
	ctx.moveTo(0, -size90); // csúcs
	ctx.lineTo(size90, 0); // jobb oldal - TODO quadraticCurveTo
	ctx.lineTo(size40, -size10);
	ctx.lineTo(size50, size90); // TODO quadraticCurveTo

	ctx.lineTo(-size50, size90); // TODO quadraticCurveTo
	ctx.lineTo(-size40, -size10);
	ctx.lineTo(-size90, 0);
	ctx.closePath();// végét összeköti TODO quadraticCurveTo
	ctx.fill();
	ctx.stroke();

	ctx.restore();
};
