/**
 * handles the programming of a move
 * @author sarkiroka on 2016.12.11.
 */
var constants = require('../constants');
var stateOfTheGame = require('../state-of-the-game');
module.exports = function (direction) {
	if (stateOfTheGame.is == constants.GAME_STATE.PROGRAMMING) {
		console.log(direction);
	} else {
		console.warn('cannot programming while game is running');
	}
};
