/**
 * kiirja a build végét
 * @author sarkiroka on 2017.04.29.
 */
module.exports = function (what) {
	return function () {
		setTimeout(function () {
			console.log(what, 'builded:', new Date())
		}, 1);
	}
};
