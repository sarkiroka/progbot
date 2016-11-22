/**
 * @author sarkiroka
 */
var addLights = require('./add-lights');
var addArrow = require('./add-arrow');
var createMap = require('./create-map');
var DIRECTIONS=require('./directions');
var init = require('./init');
var render = require('./render');
var showCoordinateAxis = require('./show-coordinate-axis');

var {scene, camera, renderer}=init();

createMap(10, [1, 2, 3, 4, 5, 12, 15, 25, 35, 45], scene);
showCoordinateAxis(scene);
var arrowObject = addArrow(DIRECTIONS.FORWARD, scene);

var position = 8;
camera.position.set(position, position, position);

addLights(scene);

scene.rotation.x = -Math.PI / 2;
scene.rotation.z = Math.PI / 2;

render(scene, camera, renderer);
