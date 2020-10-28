import { SlaveApp } from '@ionia/libs';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import { useMount } from 'react-use';
import './App.less';
import MasterLayout from './layouts/MasterLayout';

const App = () => {
	// useMount(() => {
	// 	const styleDom = document.createElement('style');
	// 	styleDom.innerHTML = `
	// 							.ant-btn-primary {
	// 								border-color: red !important;
	// 								background-color: #0000ff !important;
	// 							}
	// 						`;
	// 	document.getElementsByTagName('head')[0].appendChild(styleDom);
	// });

	return (
		<CacheSwitch>
			<CacheRoute exact path='/auth'>
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
