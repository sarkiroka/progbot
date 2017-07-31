/**
 * the end
 * @author sarkiroka on 2017.06.02.
 */
var debug = require('debug')('progbot:event:end-of-game');
var drawTheEnd = require('../../draw/the-end');
module.exports = function () {
	var initKeyboard = require('../../../init/init-keyboard');// because circular dependency
	debug('end of the game');
	initKeyboard.done();
	drawTheEnd();
};
