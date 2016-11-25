/**
 * @author sarkiroka on 2016.11.21.
 */
module.exports = function (onKeyboard) {
	window.addEventListener('keydown', function(e){
		e.preventDefault();
		onKeyboard(e.code);
	}, false);
};
