/**
 * debug initialize in browser
 * @author sarkiroka on 2017.06.01.
 */
var Debug = require('debug');
var disabledModules = [
	'draw:arrow', 'draw:draw-step', 'draw:program-steps',
	'draw:board:get-size'
];
Debug.enable('progbot:*,' + disabledModules.map(function (item) {
		return '-progbot:' + item;
	}).join());
var debug = Debug('progbot:init:debug');
debug('\t\t\t--==[ start ]==--\t\t\t');
