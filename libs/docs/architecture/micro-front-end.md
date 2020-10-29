---
title: 微前端
group:
    title: 基础架构
order: 2
---

# 微前端

## 什么是微前端？

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。

微前端架构具备以下几个核心价值：

技术栈无关：主框架不限制接入应用的技术栈，微应用具备完全自主权

独立开发、独立部署：微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

增量升级：在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

独立运行时：每个微应用之间状态隔离，运行时状态不共享

微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用后，随之而来的应用不可维护的问题。

微前端核心价值可查考文档： https://zhuanlan.zhihu.com/p/95085796

## qiankun 介绍

qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

## qiankun 安装

\$ yarn add qiankun # or npm i qiankun -S

## qiankun 使用

### 在主应用中注册微应用

```js
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
	{
		name: 'react app', // app name registered
		entry: '//localhost:7100',
		container: '#yourContainer',
		activeRule: '/yourActiveRule',
	},
	{
		name: 'vue app',
		entry: { scripts: ['//localhost:7100/main.js'] },
		container: '#yourContainer2',
		activeRule: '/yourActiveRule2',
	},
]);
start();
```

当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。

如果微应用不是直接跟路由关联的时候，你也可以选择手动加载微应用的方式：

```js
import { loadMicroApp } from 'qiankun';
loadMicroApp({
	name: 'app',
	entry: '//localhost:7100',
	container: '#yourContainer',
});
```

### 微应用

微应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。

1. 导出相应的生命周期钩子
   微应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 bootstrap、mount、unmount 三个生命周期钩子，以供主应用在适当的时机调用。

```js
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
	console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
	ReactDOM.render(
		<App />,
		props.container ? props.container.querySelector('#root') : document.getElementById('root')
	);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
	ReactDOM.unmountComponentAtNode(
		props.container ? props.container.querySelector('#root') : document.getElementById('root')
	);
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
	console.log('update props', props);
}
```

2. 配置微应用的打包工具
   除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置：

```js
const packageName = require('./package.json').name;
module.exports = {
	output: {
		library: `${packageName}-[name]`,
		libraryTarget: 'umd',
		jsonpFunction: `webpackJsonp_${packageName}`,
	},
};
```

## qiankun API

qiankun API 详细介绍请参考文档： https://qiankun.umijs.org/zh/api
