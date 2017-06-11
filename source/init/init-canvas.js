/**
 *
 * @author sarkiroka on 2017.06.01.
 */
var canvas = require('../common/draw/canvas');
module.exports = function () {
	var canvasElement = document.getElementById('c');
	var ctx = canvasElement.getContext('2d');
	canvas(canvasElement, ctx);
};
