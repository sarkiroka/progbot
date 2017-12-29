/**
 * handle of the backspace button
 * @author sarkiroka on 2017.08.10.
 */
var onBackspace = require('../../../game/on/backspace');
var redraw = require('../../draw/redraw');
var state = require('../../../game/state/index');

module.exports = function () {
	if (state() == state.IDLE) {
		onBackspace();
		redraw();
	} else {
		console.warn('don\'t touch keyboard while animating...', state());
	}
};
