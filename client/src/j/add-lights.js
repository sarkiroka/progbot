/**
 * creates and adds the lights to the scene
 * @author sarkiroka on 2016.11.16.
 */
module.exports = function (scene) {
	scene.add(new THREE.AmbientLight(0x666666));
	var light = new THREE.PointLight(0xffffff);
	light.position.set(100, 100, 100);
	scene.add(light);
};
