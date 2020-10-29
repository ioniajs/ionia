---
title: Webpack
group:
    title: 基础架构
order: 1.5
---

# Webpack

## Webpack 介绍

webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图。其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。在开始前你需要先理解四个核心概念：

· 入口(entry)

· 输出(output)

· loader

· 插件(plugins)

## 入口(entry)

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的，每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。

可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。

接下来我们看一个 entry 配置的最简单例子：

```js
// webpack.config.js
module.exports = {
	entry: './path/to/my/entry/file.js',
};
```

## 出口(output)

output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 output 字段，来配置这些处理过程：

```js
// webpack.config.js
const path = require('path');

module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js',
	},
};
```

在上面的示例中，我们通过 output.filename 和 output.path 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成(emit)到哪里。可能你想要了解在代码最上面导入的 path 模块是什么，它是一个 Node.js 核心模块，用于操作文件路径。

## loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

在更高层面，在 webpack 的配置中 loader 有两个目标：

1.  test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2.  use 属性，表示进行转换时，应该使用哪个 loader。

```js
// webpack.config.js
const path = require('path');

const config = {
	output: {
		filename: 'my-first-webpack.bundle.js',
	},
	module: {
		rules: [{ test: /\.txt$/, use: 'raw-loader' }],
	},
};

module.exports = config;
```

## 插件(plugins)

loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建它的一个实例。

```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
	module: {
		rules: [{ test: /\.txt$/, use: 'raw-loader' }],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

module.exports = config;
```

## Webpack 在项目中的应用

首先我们在 apps/webpack.common.js 中应用了 webpack 公共配置。

定义一些规则来解析我们的 jsx，js，css，图片，字体等。

### css 在 webpack 中定义的解析规则

```js
rules: [
	{
		test: /\.css$/, //定义正则，识别出哪些文件会被转换
		use: [
			MiniCssExtractPlugin.loader, //将css提取为独立的文件的插件
			{
				loader: 'css-loader', //配置css-loader
				options: {
					//options 为可以配置的选项
					importLoaders: 1, //用于配置[css-loader作用于@import的资源之前]有多少个loader
				},
			},
			'postcss-loader', //配置postcss-loader
		],
		exclude: /\.module\.css$/, //表示除了该文件外
	},
];

rules: [
	{
		test: /\.css$/, //定义正则，识别出哪些文件会被转换
		use: [
			MiniCssExtractPlugin.loader, //将css提取为独立的文件的插件
			{
				loader: 'css-loader', //配置css-loader
				options: {
					importLoaders: 1, //用于配置[css-loader作用于@import的资源之前]有多少个loader
					modules: true,
				},
			},
			{
				loader: 'postcss-loader', //配置postcss-loader
				options: {
					ident: 'postcss',
					plugins: loader => [require('autoprefixer')()], //postcss调用autoprefixer插件
				},
			},
		],
		include: /\.module\.css$/, //表示包含该文件
	},
];
```

### js | jsx 在 webpack 中定义的解析规则

```js
rules: [
	{
		test: /\.(js|jsx)$/, //定义正则，识别出哪些文件会被转换
		use: {
			loader: 'babel-loader', //配置label-loader
			options: {
				presets: [
					//字段设定转码规则
					[
						'@babel/preset-env', //使用这个预设，会根据浏览器来选择插件转化ES5
						{
							modules: false, //关闭js | jsx modules功能
						},
					],
					'@babel/preset-react', //转义react的jsx语法
				],
				plugins: ['@babel/transform-runtime', 'react-hot-loader/babel'], //配置插件,用于扩展webpack功能
			},
		},
		exclude: /node_modules/, //表示除了该文件外
	},
];
```

### less 在 webpack 中定义的解析规则

```js
rules: [
	{
		test: /\.less$/, //定义正则，识别出哪些文件会被转换
		use: [
			MiniCssExtractPlugin.loader, //将css提取为独立的文件的插件
			'css-loader', //配置css-loader
			{
				loader: 'less-loader', //配置less-loader
				options: {
					lessOptions: {
						//Less的可选项
						javascriptEnabled: true, //开启内联的js
					},
				},
			},
		],
	},
];
```

### ts(x)在 webpack 中定义的规则解析

```js
rules: [
	{
		test: /\.ts(x)?$/, //定义正则，识别出哪些文件会被转换
		loader: 'ts-loader', //配置ts-loader
		exclude: /node_modules/, //表示除了该文件外
	},
];
```

### svg 在 webpack 中定义的解析规则

```js
rules: [
	{
		test: /\.svg$/, //定义正则，识别出那些文件会被转换
		use: 'file-loader', //在进行转换时，使用对应文件类型的loader
	},
];
```

### png 在 webpack 中定义的解析规则

```js
rules: [
	{
		test: /\.png$/, //定义正则，识别出那些文件会被转换
		use: [
			{
				loader: 'url-loader', //配置url-loader
				options: {
					mimetype: 'image/png', //设置文件的MIME类型。如果未指定，则文件扩展名将用于查找MIME类型。
				},
			},
		],
	},
];
```

在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在:

```js
resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
```

### 优化配置

```js
optimization: { //优化,根据所选的内容运行优化mode，可以手动配置和替代
	runtimeChunk: 'single', //会生成一个唯一单独的runtime.js文件,就是manifest
	splitChunks: { //根据不同的配置来分割打包出来的bundle
		cacheGroups: { //缓存策略
			vendor: {
				test: /[\\/]node_modules[\\/]/, //正则匹配文件
				name: 'vendors', //重写文件名称
				chunks: 'all', //用于标识打包(优化前)有哪些modules被用于优化到不同的chunks中，值类型为string，有效值为'all','async','initial',提供'all'表示优化后的chunks可以包括异步和非异步modules
			},
		},
	},
},

```

### 下面是开发环境的 webpack 配置：

```js
const config = merge(commonConfig, {
	mode: 'development',
	entry: ['react-hot-loader/patch', resolve(__dirname, './src/index.tsx')], //入口文件，指定一个或者多个不同的入口起点
	output: {
		//指定webpack的输出位置
		publicPath: '/', //配置项目中所有资源指定一个基础路径，也就是公共路径
	},
	devtool: 'source-map', //此选项控制是否生成，以及如何生成source map
	devServer: {
		port: 7000, //提供访问的端口号
		contentBase: './dist', //告诉服务器从哪里提供内容
		clientLogLevel: 'warning', //开发工具控制台显示信息
		disableHostCheck: true, //设置为true时，此选项将绕过主机检查
		compress: true, //对所有请求都启用gzip压缩
		headers: {
			'Access-Control-Allow-Origin': '*', //在所有响应中添加首部内容
		},
		historyApiFallback: true, //当使用HTML5 History API时，任意的404响应都可能需要被替代为index.html
		overlay: { warnings: false, errors: true }, //出现编译器错误或警告时，在浏览器中显示全屏覆盖
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), //配置项通过别名来把原导入路径映射成一个新的导入路径
		},
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: resolve(__dirname, './mockServiceWorker.js') }], //配置插件
		}),
	],
});
```
