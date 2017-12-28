/**
 *
 * @author sarkiroka on 2017.06.02.
 */
var clear = require('./clear');
var debug = require('debug')('progbot:draw:redraw');
var drawBoard = require('./board/board');
var drawProgramSteps = require('./program-steps');
var state = require('../../game/state/index');
module.exports = function () {
	debug('now redraw');
	clear();
	drawProgramSteps(state.getProgram());
	drawBoard(state.getBoard());
};
