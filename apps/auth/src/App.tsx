import Login from '@/pages/Login';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import './App.less';

const App = () => {
	return (
		<div className='io-layout__auth'>
			<Switch>
				<Route exact path='/' component={Login} />
			</Switch>
		</div>
	);
};

export default hot(App);
