/**
 *
 * @author sarkiroka on 2017.06.02.
 */
var clear=require('../../draw/clear');
var debug=require('debug')('progbot:event:end-of-game');
module.exports = function () {
	var initKeyboard=require('../../../init/init-keyboard');
	debug('end of the game');
	initKeyboard.done();
	clear();
	/*ctx.textAlign = 'center';
	ctx.fillStyle = '#e00';
	ctx.font = '64px Arial';
	ctx.fillText('The End', 0, 0);*/
};
