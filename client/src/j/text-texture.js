/**
 * @author sarkiroka
 */
module.exports = function () {
//create image
	var bitmap = document.createElement('canvas');
	var g = bitmap.getContext('2d');
	bitmap.width = 100;
	bitmap.height = 100;
	g.font = 'Bold 20px Comic';

	g.fillStyle = 'white';
	g.fillText('roka', 0, 20);
	g.strokeStyle = 'green';
	g.strokeText('roka', 0, 20);

// canvas contents will be used for a texture
	var texture = new THREE.Texture(bitmap);
	texture.needsUpdate = true;
	return texture;
};
