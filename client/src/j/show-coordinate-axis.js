/**
 * @author sarkiroka on 2016.11.13.
 */
const SIZE_OF_AXIS = 50;
module.exports = function (scene) {
	//red:x, green:y, blue:z
	var axisHelper = new THREE.AxisHelper(SIZE_OF_AXIS);
	scene.add(axisHelper);
};
