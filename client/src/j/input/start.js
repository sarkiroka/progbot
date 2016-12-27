/**
 * handle the enter key
 * @author sarkiroka on 2016.12.17.
 */
var constants = require('../constants');
var debug = require('debug')('progbot:start');
var theGame = require('../game/the-game');
module.exports = function () {
	debug('try to start the game. the game state now is', theGame.is);
	if (theGame.is == constants.GAME_STATE.PROGRAMMING) {
		theGame.is = constants.GAME_STATE.RUNNING;
		setTimeout(()=> {
			theGame.is = constants.GAME_STATE.PROGRAMMING;
			debug('returning to the programming state');
		}, 5000);
	} else {
		console.warn('already in running/result');
	}
};
