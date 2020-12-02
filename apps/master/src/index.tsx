import { isDev, logger, MasterApplication, configs } from '@ionia/libs';
import { IoniaApp } from '@ionia/libs/es/core/master-application';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './i18n';

logger.info('NODE_ENV', process.env.NODE_ENV);

if (isDev) {
	require('../mocks').default.start();
}

const apps: IoniaApp<{}>[] = [
	{
		name: 'auth',
		entry: isDev ? '//localhost:7001' : configs.API_HOST,
		activeRule: '/auth',
		hideInMenu: true,
	},
	{
		name: 'cms',
		entry: isDev ? '//localhost:7002' : configs.API_HOST,
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
	'/cms',
	initGlobalState,
	lifeCycles
).start();
