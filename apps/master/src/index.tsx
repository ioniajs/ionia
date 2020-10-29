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
		name: 'auth',
		entry: '//localhost:7001',
		activeRule: '/auth',
		hideInMenu: true,
	},
	{
		name: 'cms',
		entry: '//localhost:7002',
		activeRule: '/cms',
	},
	{
		name: 'shop',
		entry: '//localhost:7003',
		activeRule: '/shop',
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
	'/cms',
	initGlobalState,
	lifeCycles
).start();
