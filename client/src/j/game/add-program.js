/**
 * @author sarkiroka on 2016.12.26.
 */
var addArrow = require('../add-arrow');
var constants = require('../constants');
var theGame = require('./the-game');
var three = require('../graphics/three');


module.exports = function (instruction) {
	var programLength = theGame.program.length;
	var projector = new THREE.Projector();
	var p3D = new THREE.Vector3((1 + programLength) * 10, 10, (-5 + programLength) * 10);

	console.log('e', p3D);
	//p3D.unproject(three.camera);
	//p3D.sub(three.camera.position);
	//console.log('e', p3D);

//need extra steps to convert p2D to window's coordinates
	//p2D.x = (p2D.x + 1) / 2 * window.innerWidth;
	//p2D.y = -(p2D.y - 1) / 2 * window.innerHeight;

	var arrowObject = addArrow(constants.DIRECTIONS.FORWARD, three.osdScene);
	arrowObject.mesh.position.set(p3D.x, p3D.y, p3D.z);
	arrowObject.line.position.set(p3D.x, p3D.y, p3D.z);
	//arrowObject.line.position.set(p3D);
	theGame.program.push(arrowObject);
};
