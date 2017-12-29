/**
 * handle escape key
 * @author sarkiroka on 2017.06.02.
 */
var debug = require('debug')('progbot:event:end-of-game');
var drawTheEnd = require('../../draw/the-end');
var onEndOfProgramming = require('./end-of-programming/end-of-programming');
var state = require('../../../game/state/index');
module.exports = function () {
	var initKeyboard = require('../../../init/init-keyboard');// because circular dependency
	if (state() == state.RESULT_ANIMATION) {
		debug('canceling the result screen');
		onEndOfProgramming.cancelResult();
	} else if (state() == state.IDLE) {
		debug('end of the game');
		state(state.END);
		initKeyboard.done();
		drawTheEnd();
	} else {
		console.warn('oh no, escape');
	}
};
