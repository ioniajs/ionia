---
title: 路由权限
group:
    title: 权限控制
order: 0
---

# 路由权限

在使用路由的时候，有的时候我们的界面只能够在登录之后才可以看的到，这个时候就需要使用路由权限控制了

## 示例

首先写一个简单的路由：

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Permissions() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/public'>Public Page</Link>
					</li>
					<li>
						<Link to='/protected'>Protected Page</Link>
					</li>
				</ul>
				<Route path='/public'>
					<PublicPage />
				</Route>
				<Route path='/protected'>
					<ProtectedPage />
				</Route>
			</div>
		</Router>
	);
}
function PublicPage() {
	return <h3>Public</h3>;
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}
```

先定义一个全局变量 fakeAuth 中有一个属性 isAuthenticated 来表示用户的登录状态。

定义一个私有路由 PrivateRoute，可以用三元表达式来判断用户是否登录。

isAuthenticated 为 true 则有权限访问 ProtectedPage 页面，否则只能访问 LoginPage 页面。

给 LoginPage 页面加个按钮进行登录。

登录成功调用 fakeAuth.authenticate 方法来把 isAuthenticated 改为 true。

成品效果如下：

```jsx
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation,
} from 'react-router-dom';

export default function Permissions() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/public'>Public Page</Link>
					</li>
					<li>
						<Link to='/protected'>Protected Page</Link>
					</li>
				</ul>

				<Switch>
					<Route path='/public'>
						<PublicPage />
					</Route>
					<Route path='/login'>
						<LoginPage />
					</Route>
					<PrivateRoute path='/protected'>
						<ProtectedPage />
					</PrivateRoute>
				</Switch>
			</div>
		</Router>
	);
}

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100);
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	},
};

function PrivateRoute({ children }) {
	return (
		<Route
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

function PublicPage() {
	return <h3>Public</h3>;
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}

function LoginPage() {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	let login = () => {
		fakeAuth.authenticate(() => {
			history.replace(from);
		});
	};

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button onClick={login}>Log in</button>
		</div>
	);
}
```
