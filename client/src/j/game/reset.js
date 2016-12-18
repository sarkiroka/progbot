/**
 * resets the state of the game
 * @author sarkiroka on 2016.12.19.
 */
var constants = require('./../constants');
var theGame = require('./the-game');
module.exports = function () {
	theGame.is = constants.GAME_STATE.PROGRAMMING;
	theGame.program = [];
};
