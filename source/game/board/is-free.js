/**
 * viszaadja hogy az adott cella üres-e vagy sem. ha nincs cella akkor null-al tér vissza
 * @author sarkiroka on 2017.12.29.
 */
module.exports = function (tile) {
	var retValue=null;
	if(tile){
		retValue=!(tile.type & 1);
	}
	return retValue;
};
