/**
 * when program is done
 * @author sarkiroka on 2017.12.27.
 */
module.exports = function () {
	// TODO át kell állitani a játék állapotát, elanimálni, majd megjeleniteni a dógokat
	drawCurrentPosition();
	checkResult(function (success) {
		if (success) {
			currentLevel++;
			win();
			reDraw();
		} else {
			loose();
		}
		setDefaults();
	});
};
