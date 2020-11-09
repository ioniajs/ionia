import { SlaveApp } from '@ionia/libs';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import './App.less';
import MasterLayout from './layouts/MasterLayout';

const App = () => {
	return (
		<CacheSwitch>
			<CacheRoute path='/auth'>
				<SlaveApp />
			</CacheRoute>
			<CacheRoute path='/ide'>
				<SlaveApp />
			</CacheRoute>
			<CacheRoute path='/'>
				<MasterLayout>
					<SlaveApp />
				</MasterLayout>
			</CacheRoute>
		</CacheSwitch>
	);
};

export default hot(App);
