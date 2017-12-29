/**
 * végiganimálja a programkódot, majd a végén meghívja a callback-et
 * @author sarkiroka on 2017.12.29.
 */
var animateStep = require('./animate-step');
var board2CanvasCoordinates = require('../../../util/board-to-canvas-coordinate');
var boardConstants = require('../../../../game/board/constants');
var debug = require('debug')('progbot:event:on:end-of-programming:animate-program');
var drawProgramSteps = require('../../../draw/program-steps');
var state = require('../../../../game/state/index');

var instructionPointer = -1;
var robotPosition = null;

module.exports = function animateProgram(callback) {
	var error = null;
	var program = state.getProgram();
	if (program.length == 0) {
		error = new Error('there is no program');
		return callback(error, null);
	}
	if (!robotPosition) {
		debug('there is no robot position, calculate it');
		var board = state.getBoard();
		var startTile = board.find(tile=>tile.type == boardConstants.S);
		if (!startTile) {
			error = new Error('invalid board, no start position defined');
			console.error(error);
			return callback(error, null);
		}
		var canvasCoordinates = board2CanvasCoordinates(startTile.x, startTile.y);
		robotPosition = {
			x: canvasCoordinates.x,
			y: canvasCoordinates.y,
			direction: 0 // up
		}
	}
	instructionPointer++;
	var programStep = program[instructionPointer];
	drawProgramSteps(program, instructionPointer);
	animateStep(robotPosition, programStep, function (newPosition) {
		robotPosition = newPosition;
		if (instructionPointer < program.length - 1) {
			animateProgram(callback);
		} else {
			callback(null, newPosition);
		}
	});
};
module.exports.reset = function () {//TODO meghivni a játék végén
	instructionPointer = -1;
	robotPosition = null;
};
