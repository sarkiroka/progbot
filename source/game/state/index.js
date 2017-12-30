/**
 * a játék állapotának lekérdezése, vagy módosítása
 * @author sarkiroka on 2017.12.26.
 */
var getTheBoard = require('../board/get-board');
var showDemo = require('../show-demo');

var STATE = {
	IDLE: 'IDLE',
	CHECK_ANIMATION: 'CHECK_ANIMATION',
	RESULT_ANIMATION: 'RESULT_ANIMATION',
	END: 'END'
};
var program = []; // az aktuálisan futtatandó kód helye, stringeket tartalmaz amik az utasitások
var board = []; // az aktuálisan megjelenő tábla helye, minden tömbelem tartalmaz egy tipus,x,y triót.
var currentLevel = 0;
var state = STATE.IDLE;
module.exports = function (newValue) {
	if (typeof newValue != 'undefined' && arguments.length >= 1) {
		var isNewValueOneOfValidState = typeof STATE[newValue] == 'string';
		if (isNewValueOneOfValidState) {
			state = STATE[newValue];
		} else {
			console.warn(newValue, 'is not a valid state');
		}
	}
	return state;
};
module.exports.IDLE = STATE.IDLE;
module.exports.CHECK_ANIMATION = STATE.CHECK_ANIMATION;
module.exports.RESULT_ANIMATION = STATE.RESULT_ANIMATION;
module.exports.END = STATE.END;
module.exports.addProgramStep = function (programStep) {//visszatér a módosítások számával. ha negatív akkor hiba volt
	if (state == STATE.IDLE) {
		program.push(programStep);
		return 1;
	} else {
		console.warn('the operation is not permitted by current game state');
		return -1;
	}
};
module.exports.removeLastProgramStep = function () {// visszatér a módosítások számával. ha negativ akkor hiba volt
	if (state == STATE.IDLE) {
		if (program.length == 0) {
			console.warn('there are no more proram step');
			return 0;
		}
		program.pop();
		return 1;
	} else {
		console.warn('the operation is not permitted by current game state');
		return -1;
	}
};
module.exports.getProgram = function () {
	return program;
};
var currentBoard = null;
module.exports.getBoard = function () {
	return currentBoard;
};
module.exports.levelUp = function () {
	currentLevel++;
};
module.exports.loadBoard = function (callback) {
	getTheBoard(currentLevel, function (err, boardObject) {
		if (!err) {
			currentBoard = boardObject.board;
		} else {
			console.error('error in board request', err);
		}
		program = [];//azért itt mert különben inkonzisztens lenne a programkód és a pálya
		if (boardObject.demo) {
			showDemo(boardObject.demo, callback);
		} else {
			callback();
		}
	});
};
module.exports.getLevel=function(){
	return currentLevel;
};
