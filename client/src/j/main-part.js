/**
 * @author sarkiroka
 */
var createMap = require('./create-map');
var three = require('./graphics/three');
var render = require('./render');

createMap(10, [1, 2, 3, 4, 5, 12, 15, 25, 35, 45], three.scene);

render();
