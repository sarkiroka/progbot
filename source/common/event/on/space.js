/**
 * kezeli a szóköz nyomást
 * @author sarkiroka on 2017.12.30.
 */
var onKey = require('../../../game/on/key');
var redraw = require('../../draw/redraw');
var state = require('../../../game/state/index');

module.exports = function () {
	if (state() == state.IDLE) {
		onKey('space');
		redraw();
	} else {
		console.warn('don\'t touch keyboard while animating!', state());
	}
};
