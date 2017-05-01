/**
 * @author sarkiroka
 */
var webpack = require('webpack');
module.exports = {
	entry: './client/src/j/main-part.js',
	module: {
		rules: [
			{
				test:/.*\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	output: {
		filename: 'r.js',
		path: './client/static/j'
	},
	plugins: [/*new webpack.optimize.UglifyJsPlugin({})*/]
};
