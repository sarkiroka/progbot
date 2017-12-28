/**
 * kirajzolja a program lépéseit - forráskódot
 * kiszámoljuk mennyi lépés fér egy sorba, és hogy hány sorra van szükség aztán fentről lefelé balról jobbra kirajzoljuk
 * @author sarkiroka on 2017.12.28.
 */
var canvas = require('./canvas');
var constants = require('./constants');
var debug = require('debug')('progbot:draw:program-steps');
var drawStep = require('./draw-step');
module.exports = function (steps) {
	var howManyStepFit = Math.max(1, Math.floor(canvas.width / constants.programStepSize));
	var rows = Math.ceil(steps.length / howManyStepFit);
	debug('now draw %d rows and %d cols', rows, howManyStepFit);
	var instructionPointer = 0;
	canvas.ctx.lineWidth = 1;
	canvas.ctx.strokeStyle='#000';
	for (var row = rows - 1; row > -1; row--) {
		for (var col = 0; col < howManyStepFit; col++) {
			if (instructionPointer > steps.length - 1) {
				break;
			}
			drawStep(row, col, steps[instructionPointer]);
			instructionPointer++;
		}
	}
};
