/**
 * a tábla lekérése
 * @author sarkiroka on 2017.12.28.
 */
var debug = require('debug')('progbot:game:board:get-board');
var pad = require('../../common/util/pad');

module.exports = function getTheBoard(level, callback) {
	var name = pad(level, 4, '0') + '.json';
	debug('try to get the "%s" board', name);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', name);
	xhr.onload = function () {
		var retValue = [];
		var err = null;
		if (xhr.status == 200) {
			try {
				var response = JSON.parse(xhr.responseText);
				retValue = response;
			} catch (e) {
				err = 'json parse error in ajax request';
			}
		}
		else {
			err = 'ajax request failed. status code: ' + xhr.status;
		}
		callback(err, retValue);
	};
	xhr.send();
};
