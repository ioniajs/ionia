const { resolve } = require('path');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('../webpack.common.js');

const config = merge(commonConfig, {
	mode: 'development',
	entry: ['react-hot-loader/patch', resolve(__dirname, './src/index.tsx')],
	output: {
		publicPath: '/',
	},
	devtool: 'source-map',
	devServer: {
		host: '0.0.0.0',
		port: 7000,
		contentBase: './dist',
		clientLogLevel: 'warning',
		disableHostCheck: true,
		compress: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		historyApiFallback: true,
		overlay: { warnings: false, errors: true },
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: resolve(__dirname, './mockServiceWorker.js') }],
		}),
	],
});

module.exports = (env, argv) => {
	if (argv.hot) {
		config.output.filename = '[name].[hash].js';
	}
	return config;
};
