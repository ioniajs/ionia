[![Netlify Status](https://api.netlify.com/api/v1/badges/55a3e918-3150-4294-b581-d04f326a9f2a/deploy-status)](https://app.netlify.com/sites/ionia/deploys)

<h1 align="center">艾欧尼亚（Ionia）</h1>

<div align="center">
微前端快速开发框架
</div>
<br/>

[English](./README.md) | 简体中文

## 特性

-   全局状态同步
-   公共组件库
-   国际化
-   接口 Mock
-   权限控制

## 使用

```bash
$ git clone git@github.com:ioniajs/ionia.git --depth=1 && cd ionia

$ yarn && yarn start
```

## 架构

![架构](./architecture.png)

## 主应用

```ts
import { isDev, logger, MasterApplication } from '@ionia/libs';
import { IoniaApp } from '@ionia/libs/es/core/master-application';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './i18n';

if (isDev) {
	require('../mocks').default.start();
}

const apps: IoniaApp<{}>[] = [
	{
		name: 'dashboard',
		entry: '//localhost:7001',
		activeRule: '/dashboard',
	},
	{
		name: 'auth',
		entry: '//localhost:7002',
		activeRule: '/auth',
		hideInMenu: true,
	},
	{
		name: 'cms',
		entry: '//localhost:7003',
		activeRule: '/cms',
	},
];

const lifeCycles = {
	beforeLoad: [
		(app: any): any => {
			logger.debug('[LifeCycle] before load %c%s', 'color: green;', app.name);
		},
	],
	beforeMount: [
		(app: any): any => {
			logger.debug('[LifeCycle] before mount %c%s', 'color: green;', app.name);
		},
	],
	afterUnmount: [
		(app: any): any => {
			logger.debug('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
		},
	],
};

const initGlobalState = {
	title: 'Ionia',
};

new MasterApplication(
	(
		<Router>
			<App />
		</Router>
	),
	apps,
	'/dashboard',
	initGlobalState,
	lifeCycles
).start();
```

## 从应用

```ts
import { Application, isSlave } from '@ionia/libs';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const app = new Application(
	(
		<Router basename={isSlave ? '/dashboard' : '/'}>
			<App />
		</Router>
	)
);

app.start();

export async function bootstrap() {
	await app.bootstrap();
}

export async function mount(props: any) {
	await app.mount(props);
}

export async function unmount(props: any) {
	await app.unmount(props);
}
```

## 支持

诚邀您参与 ionia 的生态建设（比如：star）
