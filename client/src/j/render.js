/**
 * @author sarkiroka on 2016.11.20.
 */
const fps = 60;
var startTime = Date.now();
var three = require('./graphics/three');
var debug = require('debug')('progbot:render');
module.exports = function () {
	var render = function () {
		setTimeout(function () {
			requestAnimationFrame(render);
			var now = Date.now();
			var diff = now - startTime;
			var timer = diff * 0.0001;

			three.camera.position.x = Math.cos(timer) * 10;
			three.camera.position.z = Math.sin(timer) * 10;
			three.camera.lookAt(three.scene.position);
			three.osdCamera.lookAt(three.osdScene.position);
			three.renderer.render(three.scene, three.camera);
			//three.renderer.clearDepth();//TODO wtf
			three.renderer.render(three.osdScene, three.osdCamera);
			debug('rendering', diff);
		}, 1000 / fps);

	};
	render();
};
