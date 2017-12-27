/**
 *
 * @author sarkiroka on 2017.06.02.
 */
var debug=require('debug')('progbot:draw:redraw');
var state=require('../../game/state/index');
module.exports = function () {
	debug('now redraw',state.getProgram());
};
