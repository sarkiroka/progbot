/**
 * handle of the arrow buttons
 * @author sarkiroka on 2017.12.27.
 */
var onKey = require('../../../game/on/key');
var redraw = require('../../draw/redraw');
module.exports = function (key) {
	onKey(key);
	redraw();
};
