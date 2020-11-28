import { RedirectPage, SlaveApp } from '@ionia/libs';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import './App.less';
import MasterLayout from './layouts/MasterLayout';

const App = () => {
	return (
		<CacheSwitch>
			<Route path='/auth'>
				<SlaveApp />
			</Route>
			<Route path='/redirect' component={RedirectPage} />
			<CacheRoute path='/'>
				<MasterLayout>
					<SlaveApp />
				</MasterLayout>
			</CacheRoute>
		</CacheSwitch>
	);
};

export default hot(App);
