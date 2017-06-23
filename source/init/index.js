/**
 * inicializálás
 * @author sarkiroka on 2017.06.01.
 */
require('./debug');
var initCanvas=require('./init-canvas');
var initResize=require('./init-resize');
var initKeyboard=require('./init-keyboard');
module.exports = function () {
	initCanvas();
	initResize();
	initKeyboard();
};
