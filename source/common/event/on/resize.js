/**
 * az átméretezés kezelője
 * @author sarkiroka on 2017.06.02.
 */
var canvas = require('../../draw/canvas');
var debug = require('debug')('progbot:event:resize');
var redraw = require('../../draw/redraw');
module.exports = function (e) {
	debug(e ? 'resize event handling' : 'initial resize event');
	canvas.setSize(window.innerWidth, window.innerHeight);
	redraw();
};
