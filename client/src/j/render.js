/**
 * @author sarkiroka on 2016.11.20.
 */
var startTime = Date.now();
module.exports = function (scene, camera, renderer) {
	var render = function () {
		requestAnimationFrame(render);
		var diff = Date.now() - startTime;

		/*
		 var timer = diff * 0.0001;

		 camera.position.x = Math.cos(timer) * 10;
		 camera.position.z = Math.sin(timer) * 10;*/
		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	};
	render();
};
