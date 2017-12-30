/**
 * draw a wait sign
 * @author sarkiroka on 2017.12.30.
 */
var canvas = require('./canvas');
var constants = require('./constants');
var debug = require('debug')('progbot:draw:wait');

var gradient = null;
var rootThree = Math.sqrt(3);

module.exports = function (x, y, size, highlight) {
	var sizeR = size * 0.42;
	var sizeR2 = sizeR / 2;
	var sizeM = sizeR2 * rootThree;
	var fontSize = Math.floor(size / 5);
	var ctx = canvas.ctx;
	debug('draw wait instruction');
	ctx.save();

	ctx.translate(x, y);
	ctx.beginPath();
	if (highlight) {
		var highlightGradient = ctx.createLinearGradient(0, sizeR, 0, -sizeR);
		highlightGradient.addColorStop(0, constants.waitHighlightGradiendStartColor);
		highlightGradient.addColorStop(1, constants.waitHighlightGradiendEndColor);
		ctx.fillStyle = highlightGradient;
	} else {
		if (!gradient) {
			gradient = ctx.createLinearGradient(0, sizeR, 0, -sizeR);
			gradient.addColorStop(0, constants.waitGradientStartColor);
			gradient.addColorStop(1, constants.waitGradientEndColor);
		}
		ctx.fillStyle = gradient;
	}

	ctx.moveTo(-sizeR2, -sizeM);
	ctx.lineTo(sizeR2, -sizeM);
	ctx.lineTo(sizeR, 0);
	ctx.lineTo(sizeR2, sizeM);
	ctx.lineTo(-sizeR2, sizeM);
	ctx.lineTo(-sizeR, 0);
	ctx.closePath(); // végét összeköti
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = highlight ? constants.waitTextHighlightColor : constants.waitTextColor;
	ctx.textBaseline = 'middle';
	ctx.textAlign = 'center';
	ctx.font = 'bold ' + fontSize + 'pt Arial';
	ctx.fillText('STOP', 0, 0);

	ctx.restore();
};
