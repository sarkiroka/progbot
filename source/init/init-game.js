/**
 * első pálya lekérése
 * @author sarkiroka on 2017.12.28.
 */
var state = require('../game/state/index');

module.exports = function (callback) {
	state.loadBoard(callback);
};
