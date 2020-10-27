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

![GitFlow](./ruler.png)

在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在:

```js
resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
```

![GitFlow](./optimization.png)

下面是开发环境的 webpack 配置：

![GitFlow](./devcof.png)
