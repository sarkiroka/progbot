/**
 * kirajzol egy programlépést.
 * ehhez kap sor és oszlop koordinátákat amiket a bal alsó saroktól - mint origótól - kezdve jelenit meg
 * @author sarkiroka on 2017.12.28.
 */
var canvas = require('./canvas');
var constants = require('./constants');
var debug = require('debug')('progbot:draw:draw-step');
var drawArrow = require('./arrow');
var drawWait = require('./wait');

var rectangleSize = constants.programStepSize - constants.programStepMargin;

module.exports = function (row, col, step, highlight) {
	debug('now draw a step', row, col, step);
	var x0 = col * constants.programStepSize;
	var y0 = canvas.height - (row + 1) * constants.programStepSize;
	canvas.ctx.fillStyle = highlight ? constants.programStepHighlightBackground : constants.programStepBackground;
	canvas.ctx.fillRect(x0, y0, rectangleSize, rectangleSize);
	canvas.ctx.strokeRect(x0, y0, rectangleSize, rectangleSize);
	var isArrow = step == 'left' || step == 'right' || step == 'up' || step == 'down';
	if (isArrow) {
		drawArrow(x0 + rectangleSize / 2, y0 + rectangleSize / 2, step, rectangleSize, highlight);
	} else if (step == 'space') {
		drawWait(x0 + rectangleSize / 2, y0 + rectangleSize / 2, rectangleSize, highlight);
	} else {
		console.warn('unknown program step', step);
	}
};
//TODO ez a fájl nem is draw-step, hanem csak step
