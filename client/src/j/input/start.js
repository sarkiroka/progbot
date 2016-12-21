/**
 * handle the enter key
 * @author sarkiroka on 2016.12.17.
 */
var constants = require('../constants');
var stateOfTheGame = require('../game/the-game');
module.exports = function () {
	if (stateOfTheGame.is == constants.GAME_STATE.PROGRAMMING) {
		stateOfTheGame.is = constants.GAME_STATE.RUNNING;
		setTimeout(()=> {
			stateOfTheGame.is = constants.GAME_STATE.PROGRAMMING;
			console.info('returning to the programming state');
		}, 5000);
	} else {
		console.warn('already in running/result');
	}
};
