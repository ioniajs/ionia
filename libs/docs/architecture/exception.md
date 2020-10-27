---
title: 异常捕获
group:
    title: 基础架构
order: 10
---

# 异常捕获

## 错误边界介绍

部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

## 目的

在某些 UI 崩溃的时候，不至于整个 Webapp 崩溃。

### 注意，错误边界无法捕获以下场景中产生的错误：

· 事件处理（了解更多）

· 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）

· 服务端渲染

· 它自身抛出来的错误（并非它的子组件）

### 用法

如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。

当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI，使用 componentDidCatch() 打印错误信息。

```js
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// 你同样可以将错误日志上报给服务器
		logErrorToMyService(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
```

然后你可以将它作为一个常规组件去使用。

```js
<ErrorBoundary>
	<MyWidget />
</ErrorBoundary>
```

错误边界的工作方式类似于 JavaScript 的 catch {}，不同之处在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

注意错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界，这也类似于 JavaScript 中 catch {} 的工作机制。

### 错误边界应该放置在哪？

错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息，就像服务端框架经常处理崩溃一样。你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。

### 未捕获错误（Uncaught Errors）的新行为

自 React 16 起，任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。

此变化意味着当你迁移到 React 16 时，你可能会发现一些已存在你应用中但未曾注意到的崩溃。增加错误边界能够让你在应用发生异常时提供更好的用户体验。
