/**
 * @author sarkiroka
 */
var webpack = require('webpack');
module.exports = {
	entry: './client/src/j/main-part.js',
	module: {
		loaders: [
			{
				test:/.*\.js$/,
				loader: 'babel?presets[]=es2015'
			}
		]
	},
	output: {
		filename: 'r.js',
		path: './client/static/j'
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({})]
};
