/**
 * inicializálás
 * @author sarkiroka on 2017.06.01.
 */
require('./debug');
var initCanvas = require('./init-canvas');
var initGame = require('./init-game');
var initResize = require('./init-resize');
var initKeyboard = require('./init-keyboard');
module.exports = function () {
	initGame(function () {
		initCanvas();
		initResize();
		initKeyboard();
	});
};
