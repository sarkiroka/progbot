/**
 * megjeleníti a megadott képet
 * @author sarkiroka on 2017.12.30.
 */
var containerDiv = document.getElementById('demo-container');
module.exports = function (url, callback) {
	var image = document.createElement('image');
	image.onload = onload;
	image.src = url;
	containerDiv.appendChild(image);

	function onload() {
		containerDiv.classList.remove('hide');

	}
};
