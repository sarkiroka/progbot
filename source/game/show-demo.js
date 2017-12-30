/**
 * megjeleníti a megadott képet
 * @author sarkiroka on 2017.12.30.
 */
var containerDiv = document.getElementById('demo-container');
var demoTimeSeconds = 33;
module.exports = function (url, callback) {
	var image = document.createElement('img');
	var rnd = (Math.random() + '').replace('.', '');
	var demoId = 'demo-image-' + rnd;
	image.setAttribute('id', demoId);
	image.onload = onload;
	image.onerror = onerror;
	image.setAttribute('src', url);
	containerDiv.appendChild(image);
	var timer = document.createElement('div');
	var timerId = 'demo-timer-' + rnd;
	timer.setAttribute('id', timerId);
	var counter = demoTimeSeconds;
	timer.innerHTML = counter;
	containerDiv.appendChild(timer);

	function onload() {
		containerDiv.classList.remove('hide');
		var image = document.getElementById(demoId);
		image.setAttribute('style', 'margin-left:-' + image.width / 2 + 'px;margin-top:-' + image.height / 2 + 'px;');
		timer.setAttribute('style', 'margin-top:-' + Math.min(image.height / 2 + 32, window.innerHeight / 2 - 5) + 'px;');
		var counterId = setInterval(function () {
			timer.innerHTML = counter + '';
			counter--;
		}, 999);
		setTimeout(function () {
			containerDiv.classList.add('hide');
			containerDiv.removeChild(image);
			containerDiv.removeChild(timer);
			clearInterval(counterId);
			callback();
		}, demoTimeSeconds * 1000);
	}

	function onerror() {
		callback();
	}
};
