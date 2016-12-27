/**
 * initialize scenes, cameras and renderer
 * @author sarkiroka
 */
var addLights = require('./add-lights');
var debug = require('debug')('progbot:init');
var handleKeyboard = require('./handle-keyboard');
var inputDispatcher = require('./input-dispatcher');
var keyboardDispatcher = require('./keyboard-dispatcher');
var resizeWindow = require('./resize-window');
var showCoordinateAxis = require('./show-coordinate-axis');
module.exports = function () {
	var scene = new THREE.Scene();
	var osdScene = new THREE.Scene();
	scene.background = new THREE.Color(0x010120);
	scene.rotation.y = Math.PI * 2;
	//scene.rotation.z = Math.PI;

	osdScene.rotation.y = Math.PI / -2;
	osdScene.rotation.z = Math.PI;

	addLights(scene);
	addLights(osdScene);

	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	var osdCamera = new THREE.OrthographicCamera(-100, 100, -100, 100, 0.1, 1000);

	osdCamera.position.set(10, 10, 10);
	camera.position.set(8, 8, 8);

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.autoClear = false;//for overlay

	showCoordinateAxis(scene);
	showCoordinateAxis(osdScene);

	resizeWindow(scene, camera, renderer);
	handleKeyboard(inputDispatcher(keyboardDispatcher));
	document.body.appendChild(renderer.domElement);
	var retValue = {scene, camera, renderer, osdScene, osdCamera};
	debug('init complete', retValue);
	return retValue;
};
