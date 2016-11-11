/**
 * @author sarkiroka
 */
var textTexture = require('./text-texture');
module.exports = function () {
	var texture = textTexture();

	var cubes = [];
	for (var c = 0; c < 3; c++) {
		var geometry = new THREE.BoxGeometry(1 + (c == 2 ? 1 : 0), 1 + (c == 2 ? 1 : 0), 1 + (c == 2 ? 1 : 0));
		for (var i = 0; i < geometry.faces.length / 2; i++) {
			var color = Math.random() * 0xffffff;
			geometry.faces[2 * i].color.setHex(color);
			geometry.faces[2 * i + 1].color.setHex(color);
		}

		if (c == 2) {
			var material = new THREE.MeshBasicMaterial({map: texture, color: 0x999999, vertexColors: THREE.FaceColors});
		} else {
			var material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});
		}
		var cube = new THREE.Mesh(geometry, material);
		//scene.add(cube);
		cube.rotation.x = Math.random();
		cube.rotation.y = Math.random();
		cube.position.x = 1 - c * 2;
		cube.position.y = c;
		cubes.push(cube);
	}

	//at render time:
	//cube.rotation.x += 0.01;
	/*for (var i = 0; i < cubes.length; i++) {
	 var cube = cubes[i];
	 cube.rotation.y += 0.017;
	 }*/

};
