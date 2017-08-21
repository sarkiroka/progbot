/**
 * handle of the backspace button
 * @author sarkiroka on 2017.08.10.
 */
var gameOnBackspace = require('../../../game/on/backspace');
var redraw = require('../../draw/redraw');
module.exports = function () {
	gameOnBackspace();
	redraw();
};
