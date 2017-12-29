/**
 * pad with...
 * @author sarkiroka on 2017.12.28.
 */
module.exports = function pad(str, length, pad) {
	var retValue = str + '';
	var padString = pad + '';
	var willGrowing = !!padString.length;
	var notEnoughLong = retValue.length < length;
	if (!willGrowing) {
		console.warn('pad inpossible because no pad character defined', arguments);
	}

	while (notEnoughLong && willGrowing) {
		retValue = padString + retValue;
		notEnoughLong = retValue.length < length;
	}

	return retValue;
};
