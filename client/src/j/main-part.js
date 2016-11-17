/**
 * @author sarkiroka
 */
var addLights = require('./add-lights');
var createArrow = require('./create-arrow');
var createMap = require('./create-map');
var showCoordinateAxis = require('./show-coordinate-axis');
var init = require('./init');

var {scene, camera, renderer}=init();

createMap(10, [1, 2, 3, 4, 5, 12, 15, 25, 35, 45], scene);
showCoordinateAxis(scene);
var arrowObject = createArrow(0, 0, 2, scene);

var position = 8;
camera.position.set(position, position, position);

addLights(scene);

var startTime = Date.now();
scene.rotation.x = -Math.PI / 2;
scene.rotation.z = Math.PI / 2;
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
