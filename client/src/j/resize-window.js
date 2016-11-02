/**
 * @author sarkiroka
 */
module.exports = function (scene, camera, renderer) {
	renderer.setSize(window.innerWidth, window.innerHeight);
	window.addEventListener('resize', onWindowResize, false);

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

};
