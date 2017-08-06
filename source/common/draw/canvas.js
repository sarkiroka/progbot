/**
 * ez tárolja a canvas-os objektumokat
 * @author sarkiroka on 2017.06.01.
 */
var exportObject = function (canvas, ctx) {
	exportObject.canvas = canvas;
	exportObject.ctx = ctx;
};
exportObject.canvas = null;
exportObject.ctx = null;
exportObject.center = {};
exportObject.centerX = 0;
exportObject.centerY = 0;
exportObject.setSize = function (width, height) {
	exportObject.canvas.width = width;
	exportObject.canvas.height = height;
	exportObject.centerX = width / 2;
	exportObject.centerY = height / 2;
};
module.exports = exportObject;
