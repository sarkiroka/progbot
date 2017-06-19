/**
 * fel és leiratkozik a billentyűzet eseményekre
 * @author sarkiroka on 2017.06.01.
 */
var onKeyEvent=require('../common/event/on-key-event');
module.exports = function () {
	document.addEventListener('keydown', onKeyEvent);
};
module.exports.done = function () {
	document.removeEventListener('keydown', onKeyEvent);
};
