/**
 * @author sarkiroka on 2016.12.26.
 */
var addArrow = require('../add-arrow');
var constants = require('../constants');
var theGame = require('./the-game');
var three = require('../graphics/three');
var scale = 0.5;
var arrowPerRow = 16 / scale;

module.exports = function (instruction) {
	var programLength = theGame.program.length;
	var projector = new THREE.Projector();

	var x = -92 + (programLength % arrowPerRow) * 12 * scale;
	var y = 110 + 10 * scale - Math.floor(programLength / arrowPerRow) * 10;
	var p3D = new THREE.Vector3(x, y, 0);

	var arrowObject = addArrow(constants.DIRECTIONS.FORWARD, scale, three.osdScene);
	arrowObject.mesh.position.set(p3D.x, p3D.y, p3D.z);
	arrowObject.line.position.set(p3D.x, p3D.y, p3D.z);
	arrowObject.seed = 1000 * Math.random;
	theGame.program.push(arrowObject);
};
