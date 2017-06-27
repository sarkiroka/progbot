/**
 * az átméretezés kezelője
 * @author sarkiroka on 2017.06.02.
 */
var canvas = require('../../draw/canvas');
var debug = require('debug')('progbot:event:resize');
module.exports = function (e) {
	debug('resize event handling');
	canvas.setSize(window.innerWidth, window.innerHeight)
};
