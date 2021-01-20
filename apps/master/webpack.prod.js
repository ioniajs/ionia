const { resolve } = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const config = merge(commonConfig, {
	mode: 'production',
	entry: resolve(__dirname, './src/index.tsx'),
	output: {
		publicPath: '/',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});

module.exports = smp.wrap(config);
// module.exports = config;
