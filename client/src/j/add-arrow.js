/**
 * @author sarkiroka on 2016.11.07.
 */

module.exports = function (direction, scene) {
	var x=0;
	var y=0;
	var z=2;
	var points = [];
	var width = 0.5;
	var height = 0.6;
	var depth = 0.1;
	points.push(new THREE.Vector2(0, height));
	points.push(new THREE.Vector2(width, 0));
	points.push(new THREE.Vector2(width / 2, 0));
	points.push(new THREE.Vector2(width / 2, -height));
	points.push(new THREE.Vector2(0, -0.7 * height));
	points.push(new THREE.Vector2(-width / 2, -height));
	points.push(new THREE.Vector2(-width / 2, 0));
	points.push(new THREE.Vector2(-width, 0));
	var shape = new THREE.Shape(points);
	var material = new THREE.MeshLambertMaterial({color: 0xff0000});
	var extrudeSettings = {
		amount: depth,
		steps: 1,
		material: 1,
		extrudeMaterial: 0,
		bevelEnabled: true,
		bevelThickness: 0.1,
		bevelSize: 0,
		bevelSegments: 1
	};
	var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
	var edges = new THREE.EdgesGeometry(geometry);
	var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
	var mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.z = -Math.PI / 2;
	line.rotation.z = -Math.PI / 2;
	mesh.position.set(x, y, z);
	line.position.set(x, y, z);
	scene.add(mesh);
	scene.add(line);
	return {mesh, line};

};
