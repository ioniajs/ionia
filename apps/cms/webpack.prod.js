const { name } = require('./package.json');
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common.js');

module.exports = merge(commonConfig, {
	mode: 'production',
	entry: resolve(__dirname, './src/index.tsx'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		library: `${name}-[name]`,
		libraryTarget: 'umd',
		jsonpFunction: `webpackJsonp_${name}`,
		globalObject: 'window',
		publicPath: '/slave/cms/',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
