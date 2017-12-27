/**
 * a játék állapotának lekérdezése, vagy módosítása
 * @author sarkiroka on 2017.12.26.
 */
var STATE = {
	IDLE: 'IDLE',
	CHECK_ANIMATION: 'CHECK_ANIMATION',
	RESULT_ANIMATION: 'RESULT_ANIMATION'
};
var program = [];
var state = STATE.IDLE;
module.exports = function (state, newValue) {
	if (typeof newValue == 'undefined' && arguments.length < 2) {
		var isNewValueOneOfValidState = typeof STATE[newValue] == 'string';
		if (isNewValueOneOfValidState) {
			state = STATE[newValue];
		} else {
			console.warn(newValue, 'is not a valid state');
		}
	}
	return state;
};
module.exports.STATE = STATE;
module.exports.addProgramStep = function (programStep) {//visszatér a módosítások számával. ha negatív akkor hiba volt
	if(state==STATE.IDLE) {
		program.push(programStep);
		return 1;
	}else{
		console.warn('the operation is not permitted by current game state');
		return -1;
	}
};
module.exports.removeLastProgramStep = function () {// visszatér a módosítások számával. ha negativ akkor hiba volt
	if(state==STATE.IDLE) {
		if(program.length==0){
			console.warn('there are no more proram step');
			return 0;
		}
		program.pop();
		return 1;
	}else{
		console.warn('the operation is not permitted by current game state');
		return -1;
	}
};
module.exports.getProgram = function () {
	return program;
};
