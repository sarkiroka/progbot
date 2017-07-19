/**
 * the end
 * @author sarkiroka on 2017.06.02.
 */
var clear = require('../../draw/clear');
var debug = require('debug')('progbot:event:end-of-game');
var theEnd = require('../../draw/the-end');
module.exports = function () {
	var initKeyboard = require('../../../init/init-keyboard');
	debug('end of the game');
	initKeyboard.done();
	theEnd();
};
