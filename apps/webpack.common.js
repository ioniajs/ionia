const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
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
						plugins: ['@babel/transform-runtime', 'react-hot-loader/babel'],
					},
				},
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
				loader: 'ts-loader',
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
				use: 'file-loader',
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
          	<link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_2147785_onct2ml145.css" />
        </head>
		<body>
			<link rel="stylesheet/less" type="text/css" href="theme.less" /> 
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
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
};
