/**
 * creates and adds the lights to the scene
 * @author sarkiroka on 2016.11.16.
 */
const AMBIENT_LIGHT_COLOR = 0x666666;
const POINT_LIGHT_COLOR = 0xffffff;
const XYZ_POSITION_OF_THE_POINT_LIGHT = 100;
module.exports = function (scene) {
	scene.add(new THREE.AmbientLight(AMBIENT_LIGHT_COLOR));
	var pointLight = new THREE.PointLight(POINT_LIGHT_COLOR);
	pointLight.position.set(XYZ_POSITION_OF_THE_POINT_LIGHT, XYZ_POSITION_OF_THE_POINT_LIGHT, XYZ_POSITION_OF_THE_POINT_LIGHT);
	scene.add(pointLight);
};
