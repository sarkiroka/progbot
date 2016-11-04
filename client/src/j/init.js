/**
 * @author sarkiroka
 */
var resizeWindow = require('./resize-window');
module.exports = function () {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({antialias: true});
	resizeWindow(scene, camera, renderer);
	document.body.appendChild(renderer.domElement);
	return {scene, camera, renderer};
};
