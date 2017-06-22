/**
 * fel és leiratkozik az átméretezés eseményre
 * @author sarkiroka on 2017.06.01.
 */
var onResize = require('../common/event/on/resize');
module.exports = function () {
	window.addEventListener('resize', onResize);
	onResize();
};
module.exports.done = function () {
	window.removeEventListener('resize', onResize);
};
