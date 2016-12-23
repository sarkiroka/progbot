/**
 * holds the state of the game. it is readable, or writeable for every module
 * @author sarkiroka on 2016.11.28.
 */
var theGame = {};
module.exports = theGame;

var reset = require('./reset');
reset();
