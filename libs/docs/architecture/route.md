---
title: 路由
group:
    title: 基础架构
order: 7
---

# 路由

## React Router 安装

\$ npm install --save react-router

然后使用一个支持 CommonJS 或 ES2015 的模块管理器，例如 webpack：

```js
// 使用 ES6 的转译器，如 babel
import { Router, Route, Link } from 'react-router';

// 不使用 ES6 的转译器
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
```

## React Router 简单例子

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
	return <h2>Index-page</h2>;
}

function List() {
	return <h2>List-page</h2>;
}

function Notice() {
	return <h2>This is a notice!</h2>;
}

function AppRouter() {
	return (
		<Router>
			<ul>
				<li>
					<Link to='/'>首页</Link>
				</li>
				<li>
					<Link to='/list'>列表</Link>
				</li>
				<li>
					<Link to='/notice'>通知</Link>
				</li>
			</ul>
			<Route path='/' exact component={Index} />
			<Route path='/list/' component={List} />
			<Route path='/notice/' component={Notice} />
		</Router>
	);
}

export default AppRouter;
```

## 路由匹配原理

路由拥有三个属性来决定是否“匹配“一个 URL：

· 嵌套关系

· 路径语法

· 优先级

### 嵌套关系

React Router 使用路由嵌套的概念来让你定义 view 的嵌套集合，当一个给定的 URL 被调用时，整个集合中（命中的部分）都会被渲染。嵌套路由被描述成一种树形结构。React Router 会深度优先遍历整个路由配置来寻找一个与给定的 URL 相匹配的路由。

### 路径语法

路由路径是匹配一个（或一部分）URL 的 一个字符串模式。大部分的路由路径都可以直接按照字面量理解，除了以下几个特殊的符号：

:paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数

() – 在它内部的内容被认为是可选的

-   – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数

```js
<Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan

<Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan

<Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
```

如果一个路由使用了相对路径，那么完整的路径将由它的所有祖先节点的路径和自身指定的相对路径拼接而成。使用绝对路径可以使路由匹配行为忽略嵌套关系。

### 优先级

最后，路由算法会根据定义的顺序自顶向下匹配路由。因此，当你拥有两个兄弟路由节点配置时，你必须确认前一个路由不会匹配后一个路由中的路径。例如，千万不要这么做：

```js
<Route path="/comments" ... />
<Redirect from="/comments" ... />
```

## Histories

React Router 是建立在 history 之上的。 简而言之，一个 history 知道如何去监听浏览器地址栏的变化， 并解析这个 URL 转化为 location 对象， 然后 router 使用它匹配到路由，最后正确地渲染对应的组件。

常用的 history 有三种形式， 但是你也可以使用 React Router 实现自定义的 history。

· browserHistory
· hashHistory
· createMemoryHistory

你可以从 React Router 中引入它们：

```js
// JavaScript 模块导入（译者注：ES6 形式）
import { browserHistory } from 'react-router';

// 然后将它们传递给<Router>:

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
```

### browserHistory

Browser history 是使用 React Router 的应用推荐的 history。它使用浏览器中的 History API 用于处理 URL，创建一个像 example.com/some/path 这样真实的 URL 。

### hashHistory

Hash history 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由。

### createMemoryHistory

Memory history 不会在地址栏被操作或读取。这就解释了我们是如何实现服务器渲染的。同时它也非常适合测试和其他的渲染环境（像 React Native ）。

三种 history 具体使用方法参考文档 http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html

## 动态路由

对于大型应用来说，一个首当其冲的问题就是所需加载的 JavaScript 的大小。程序应当只加载当前渲染页所需的 JavaScript。有些开发者将这种方式称之为“代码分拆” —— 将所有的代码分拆成多个小包，在用户浏览过程中按需加载。

对于底层细节的修改不应该需要它上面每一层级都进行修改。举个例子，为一个照片浏览页添加一个路径不应该影响到首页加载的 JavaScript 的大小。也不能因为多个团队共用一个大型的路由配置文件而造成合并时的冲突。

路由是个非常适于做代码分拆的地方：它的责任就是配置好每个 view。

React Router 里的路径匹配以及组件加载都是异步完成的，不仅允许你延迟加载组件，并且可以延迟加载路由配置。在首次加载包中你只需要有一个路径定义，路由会自动解析剩下的路径。

Route 可以定义 getChildRoutes，getIndexRoute 和 getComponents 这几个函数。它们都是异步执行，并且只有在需要时才被调用。我们将这种方式称之为 “逐渐匹配”。 React Router 会逐渐的匹配 URL 并只加载该 URL 对应页面所需的路径配置和组件。

## 跳转前确认

React Router 提供一个 routerWillLeave 生命周期钩子，这使得 React 组件可以拦截正在发生的跳转，或在离开 route 前提示用户。routerWillLeave 返回值有以下两种：

1.return false 取消此次跳转

2.return 返回提示信息，在离开 route 前提示用户进行确认。

你可以在 route 组件 中引入 Lifecycle mixin 来安装这个钩子。

```js
import { Lifecycle } from 'react-router';

const Home = React.createClass({
	// 假设 Home 是一个 route 组件，它可能会使用
	// Lifecycle mixin 去获得一个 routerWillLeave 方法。
	mixins: [Lifecycle],
	routerWillLeave(nextLocation) {
		if (!this.state.isSaved) return 'Your work is not saved! Are you sure you want to leave?';
	},
});
```

如果你在组件中使用了 ES6 类，你可以借助 react-mixin 包将 Lifecycle mixin 添加到组件中，不过我们推荐使用 React.createClass 来创建组件，初始化路由的生命周期钩子函数。

如果你想在一个深层嵌套的组件中使用 routerWillLeave 钩子，只需在 route 组件 中引入 RouteContext mixin，这样就会把 route 放到 context 中。

```js
import { Lifecycle, RouteContext } from 'react-router';

const Home = React.createClass({
	// route 会被放到 Home 和它子组件及孙子组件的 context 中，
	// 这样在层级树中 Home 及其所有子组件都可以拿到 route。
	mixins: [RouteContext],
	render() {
		return <NestedForm />;
	},
});
const NestedForm = React.createClass({
	// 后代组件使用 Lifecycle mixin 获得
	// 一个 routerWillLeave 的方法。
	mixins: [Lifecycle],
	routerWillLeave(nextLocation) {
		if (!this.state.isSaved) return 'Your work is not saved! Are you sure you want to leave?';
	},
});
```

## 相关文档

React Router 更多用法请参考文档： http://react-guide.github.io/react-router-cn/index.html
