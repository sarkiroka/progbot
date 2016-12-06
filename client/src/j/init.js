/**
 * @author sarkiroka
 */
var handleKeyboard = require('./handle-keyboard');
var resizeWindow = require('./resize-window');
var inputDispatcher = require('./input-dispatcher');
var keyboardDispatcher = require('./keyboard-dispatcher');
module.exports = function () {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({antialias: true});
	resizeWindow(scene, camera, renderer);
	handleKeyboard(inputDispatcher(keyboardDispatcher));
	document.body.appendChild(renderer.domElement);
	return {scene, camera, renderer};
};
