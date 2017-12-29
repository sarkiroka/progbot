/**
 * build javascript file
 * @author sarkiroka on 2017.05.02.
 */
const endOfBuild = require('./end-of-build')('JS');
const packageJSON = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const WebpackOnBuildPlugin = require('on-build-webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const PROJECT_BASE = path.normalize(path.join(__dirname, '..'));
const ENTRY_PATH = path.join(PROJECT_BASE, 'source', 'index.js');
const TARGET_PATH = path.join(PROJECT_BASE, 'dist');

module.exports = {
	entry: ENTRY_PATH,
	output: {
		path: TARGET_PATH,
		filename: 'progbot.js'
	},
	plugins: [
		new MinifyPlugin(),
		new webpack.BannerPlugin({
			banner: `${packageJSON.name} v${packageJSON.version} (c) ${packageJSON.author}`,
			entryOnly: true
		}),
		new WebpackOnBuildPlugin(endOfBuild)
	],
	stats: 'errors-only'
};
