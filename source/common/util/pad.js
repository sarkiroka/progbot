/**
 * pad with...
 * @author sarkiroka on 2017.12.28.
 */
module.exports = function pad(str, length, pad) {
	var retValue = str + '';
	while (pad && str && retValue.length < length) {
		retValue = pad+retValue;
	}
	return retValue;
};
