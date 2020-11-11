import Login from '@/pages/Login';
import { DefaultFooter } from '@ant-design/pro-layout';
import { LangSelector } from '@ionia/libs';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, Route, Switch } from 'react-router-dom';
import './App.less';

const App = () => {
	return (
		<div className='io-layout__auth'>
			<Switch>
				<Route exact path='/' component={Login} />
			</Switch>
			{/*<div className='lang'>*/}
			{/*	<LangSelector />*/}
			{/*</div>*/}
			{/*<div className='content'>*/}
			{/*	<div className='top'>*/}
			{/*		<div className='header'>*/}
			{/*			<Link to='/'>*/}
			{/*				<img*/}
			{/*					className='logo'*/}
			{/*					alt='logo'*/}
			{/*					src='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ'*/}
			{/*				/>*/}
			{/*				<span className='title'>Ionia</span>*/}
			{/*			</Link>*/}
			{/*		</div>*/}
			{/*		<div className='desc'>微前端快速开发框架</div>*/}
			{/*		*/}
			{/*	</div>*/}
			{/*	<DefaultFooter links={[]} copyright={` ${new Date().getFullYear()} IoniaJS`} />*/}
			{/*</div>*/}
		</div>
	);
};

export default hot(App);
