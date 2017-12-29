/**
 * handle of the arrow buttons
 * TODO ennek a fájlnak a neve nem túl következetes
 * @author sarkiroka on 2017.12.27.
 */
var onKey = require('../../../game/on/key');
var redraw = require('../../draw/redraw');
var state = require('../../../game/state/index');

module.exports = function (key) {
	if (state() == state.IDLE) {
		onKey(key);
		redraw();
	} else {
		console.warn('don\'t touch keyboard while animating!', state());
	}
};
