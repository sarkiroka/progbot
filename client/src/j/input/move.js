/**
 * handles the programming of a move
 * @author sarkiroka on 2016.12.11.
 */
var addProgram=require('../game/add-program');
var constants = require('../constants');
var theGame = require('../game/the-game');
module.exports = function (direction) {
	if (theGame.is == constants.GAME_STATE.PROGRAMMING) {
		addProgram(direction);
	} else {
		console.warn('cannot programming while game is running');
	}
};
