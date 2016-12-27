/**
 * @author sarkiroka on 2016.11.12.
 */
module.exports = function (sizeOfMap, map, scene) {
	var half = sizeOfMap / 2;
	for (var i = 0; i < map.length; i++) {
		var mapItem = map[i];
		var geometry = new THREE.PlaneGeometry(0.99, 0.99);
		var material = new THREE.MeshBasicMaterial({color: 0x666666, side: THREE.DoubleSide});
		var plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = Math.PI / 2;
		var y = Math.ceil(mapItem / sizeOfMap);
		var x = mapItem % sizeOfMap;
		plane.position.x = -half + x;
		plane.position.z = -half + y;
		scene.add(plane);
	}

};
