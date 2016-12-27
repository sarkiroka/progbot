/**
 * @author sarkiroka on 2016.11.21.
 */
module.exports = function (onKeyboard) {
	window.addEventListener('keydown', function (e) {
		if (!e.code || e.code != 'F5') {
			e.preventDefault();
		}
		onKeyboard(e.code);
	}, false);
};
