/**
 * kirajzolja az eredményt
 * @author sarkiroka on 2017.12.29.
 */
var canvas = require('./canvas');
var constants = require('./constants');

var smiley = document.getElementById('smiley');
var sad = document.getElementById('sad');
module.exports = function (result) {
	var ctx = canvas.ctx;
	var size = Math.min(canvas.centerX, canvas.centerY);
	var size05 = size * 0.05;
	var size90 = size * 0.9;
	var size2 = size * 0.5;

	ctx.save();
	ctx.translate(canvas.centerX, canvas.centerY);
	ctx.rotate((Math.random() * 45 - 22.5) * Math.PI / 180);
	ctx.drawImage(result ? smiley : sad, -size2 + size05, -size2 + size05, size90, size90);
	ctx.restore();

};
