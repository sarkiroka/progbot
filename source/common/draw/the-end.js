/**
 * the end
 * @author sarkiroka on 2017.07.13.
 */
var canvas = require('./canvas');
var clear = require('./clear');
module.exports = function () {
	clear();
	var ctx = canvas.ctx;
	/*ctx.textAlign = 'center';
	 ctx.fillStyle = '#e00';
	 ctx.font = '64px Arial';
	 ctx.fillText('The End', 0, 0);*/
};
