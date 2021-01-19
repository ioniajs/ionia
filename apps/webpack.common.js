const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const threadLoader = require('thread-loader');
const os = require('os');

// const threadPool = {
// 	// 产生的 worker 的数量
// 	workers: os.cpus() || 1,
// 	// 一个 worker 进程中并行执行工作的数量
// 	workerParallelJobs: 20,
// 	// 闲置时定时删除 worker 进程
// 	// 默认为 500ms，可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
// 	poolTimeout: 2000,
// };
// 预热
// threadLoader.warmup(threadPool, ['babel-loader']);

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					// {
					// 	loader: 'thread-loader',
					// 	options: threadPool,
					// },
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										modules: false,
									},
								],
								'@babel/preset-react',
							],
							plugins: [
								'dynamic-import-webpack',
								'@babel/transform-runtime',
								'react-hot-loader/babel',
							],
						},
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
				],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.ts(x)?$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(jpg|jpeg|gif|png|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						esModule: false,
						limit: 1024 * 1,
						name: '[name].[hash:8].[ext]',
						outputPath: 'images/',
					},
				},
			},
			{
				test: /\.(ttf|ttc|eot|woff|woff2)/,
				use: {
					loader: 'url-loader',
					options: {
						esModule: false,
						limit: 1024 * 1,
						name: '[name].[hash:8].[ext]',
						outputPath: 'fonts/',
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Ionia',
			filename: 'index.html',
			templateContent: `<!DOCTYPE html>
      <html lang="en">
    	<head>
          	<meta charset="UTF-8" />
          	<link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_2147785_108s979vwe7.css" />
        </head>
		<body>
			<div id="app" />
        </body>
      </html>`,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
			},
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin(),
		new ProgressBarPlugin(),
		new LodashModuleReplacementPlugin(),
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			// chunks: 'all',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
			}),
		],
	},
};
