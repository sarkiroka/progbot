/**
 * the global three variables: scene, camera, renderer
 * @author sarkiroka on 2016.12.26.
 */
var three = {};
module.exports = three;
var init = require('../init');
var threeObjects = init();
three.scene = threeObjects.scene;
three.camera = threeObjects.camera;
three.renderer = threeObjects.renderer;
three.osdScene = threeObjects.osdScene;
three.osdCamera = threeObjects.osdCamera;
