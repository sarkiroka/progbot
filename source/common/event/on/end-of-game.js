/**
 * the end
 * @author sarkiroka on 2017.06.02.
 */
var debug = require('debug')('progbot:event:end-of-game');
var drawTheEnd = require('../../draw/the-end');
var state=require('../../../game/state/index');
module.exports = function () {
	var initKeyboard = require('../../../init/init-keyboard');// because circular dependency
	debug('end of the game');
	state(state.RESULT_ANIMATION);
	initKeyboard.done();
	drawTheEnd();
};
