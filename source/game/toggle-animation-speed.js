/**
 * ki-be kapcsolja az animáció közbeni gyorsítást
 * @author sarkiroka on 2017.12.30.
 */
var gameConstants = require('./constants');

var speedupAnimation = false;
var speedupMultiplier = 12;
var originalRobotStepTimeSeconds = gameConstants.robotStepTimeSeconds;
var originalWaitForNextStepSeconds = gameConstants.waitForNextStepSeconds;
//var originalBeforeResultTimeSeconds = gameConstants.beforeResultTimeSeconds;
var originalResultTimeSeconds = gameConstants.resultTimeSeconds;
var originalRobotStepTimeSecondsFast = gameConstants.robotStepTimeSeconds / speedupMultiplier;
var originalWaitForNextStepSecondsFast = gameConstants.waitForNextStepSeconds / speedupMultiplier;
//var originalBeforeResultTimeSecondsFast = gameConstants.beforeResultTimeSeconds / speedupMultiplier;
var originalResultTimeSecondsFast = gameConstants.resultTimeSeconds / speedupMultiplier;

module.exports = function toggleAnimationSpeed() {
	speedupAnimation = !speedupAnimation;
	if (speedupAnimation) {
		gameConstants.resultTimeSeconds = originalResultTimeSecondsFast;
		gameConstants.robotStepTimeSeconds = originalRobotStepTimeSecondsFast;
		gameConstants.waitForNextStepSeconds = originalWaitForNextStepSecondsFast;
//		gameConstants.beforeResultTimeSeconds = originalBeforeResultTimeSecondsFast;
	} else {
		gameConstants.resultTimeSeconds = originalResultTimeSeconds;
		gameConstants.robotStepTimeSeconds = originalRobotStepTimeSeconds;
		gameConstants.waitForNextStepSeconds = originalWaitForNextStepSeconds;
//		gameConstants.beforeResultTimeSeconds = originalBeforeResultTimeSeconds;
	}
};
