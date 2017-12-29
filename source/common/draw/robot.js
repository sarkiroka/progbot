/**
 * kirajzolja a robotot
 * @author sarkiroka on 2017.12.29.
 */
var canvas = require('./canvas');
var constants=require('./constants');

var robot = document.getElementById('robot');//TODO a szeme világitson már

module.exports = function (position) {
	var ctx = canvas.ctx;
	var size = constants.boardItemSize - constants.boardItemMargin;
	var size05 = size * 0.05;
	var size90 = size * 0.9;
	var size2 = size * 0.5;

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(position.direction * Math.PI / 180);
	ctx.drawImage(robot, -size2 + size05, -size2 + size05, size90, size90);
	ctx.restore();
};
