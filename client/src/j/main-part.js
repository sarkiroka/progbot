/**
 * @author sarkiroka
 */
var createArrow=require('./create-arrow');
var init = require('./init');
var textTexture = require('./text-texture');

var {scene, camera, renderer}=init();
var texture=textTexture();

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
var mapSize = 10;
//piros:x, zöld:y, kék:z
var map = [1, 2, 3, 4, 5, 12, 15, 25, 35, 45];
for (var i = 0; i < map.length; i++) {
	var mapItem = map[i];
	var geometry = new THREE.PlaneGeometry(0.99, 0.99, 100);
	var material = new THREE.MeshBasicMaterial({color: 0x666666, side: THREE.DoubleSide});
	var plane = new THREE.Mesh(geometry, material);
	//plane.rotation.x = Math.PI / 2;
	var y = Math.ceil(mapItem / mapSize);
	var x = mapItem % mapSize;
	var half = mapSize / 2;
	plane.position.x = -half + x;
	plane.position.y = -half + y;
	scene.add(plane);
}

var axisHelper = new THREE.AxisHelper(50);
scene.add(axisHelper);
var arrowObject = createArrow();
arrowObject.mesh.position.set(0, 0, 2);
arrowObject.line.position.set(0, 0, 2);
scene.add(arrowObject.mesh);
scene.add(arrowObject.line);

var position = 8;
camera.position.set(position, position, position);

scene.add(new THREE.AmbientLight(0x666666));
var light = new THREE.PointLight(0xffffff);
light.position.set(100, 100, 100);
scene.add(light);

var startTime = Date.now();
scene.rotation.x = -Math.PI / 2;
scene.rotation.z = Math.PI / 2;
var render = function () {
	requestAnimationFrame(render);
	var diff = Date.now() - startTime;

	//cube.rotation.x += 0.01;
	/*for (var i = 0; i < cubes.length; i++) {
	 var cube = cubes[i];
	 cube.rotation.y += 0.017;
	 }*/
	/*
	 var timer = diff * 0.0001;

	 camera.position.x = Math.cos(timer) * 10;
	 camera.position.z = Math.sin(timer) * 10;*/
	camera.lookAt(scene.position);

	renderer.render(scene, camera);
};
render();
