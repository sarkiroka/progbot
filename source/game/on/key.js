/**
 * handle the key event
 * @author sarkiroka on 2017.08.18.
 */
var state=require('../state/index');
module.exports = function (key) {
	state.addProgramStep(key);
};
