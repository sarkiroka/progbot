/**
 * debug initialize in browser
 * @author sarkiroka on 2017.06.01.
 */
var Debug = require('debug');
var disabledModules = [
	'draw:arrow', 'draw:wait', 'draw:draw-step', 'draw:program-steps',
	'draw:board:get-size', 'event:on:end-of-programming:animate-step',
	'draw:board', 'draw:clear', 'draw:redraw', 'event:resize',
	'game:board:get-board', 'init:debug', 'draw:util:extend-board',
	'event:on:end-of-programming:animate-program', 'event:end-of-game'
];
Debug.enable('progbot:*,' + disabledModules.map(function (item) {
		return '-progbot:' + item;
	}).join());
var debug = Debug('progbot:init:debug');
debug('\t\t\t--==[ start ]==--\t\t\t');
