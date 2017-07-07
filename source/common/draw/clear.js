/**
 * törli a transzformációs mátrixot és lesatírozza a képernyőt
 * @author sarkiroka on 2017.06.02.
 */
var canvas = require('./canvas');
var constants=require('./constants');
var debug = require('debug')('progbot:draw:clear');
module.exports = function () {
	debug('clear all pixels');
	var ctx = canvas.ctx;
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.fillStyle = '#aaa';
	ctx.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
};
