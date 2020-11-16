import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

export interface ErrorPageProps {}

export const ErrorPage = (props: ErrorPageProps) => {
	const history = useHistory();
	return (
		<div className='io-error-page'>
			<img src={require('../../static/images/404.png')} alt='' />
			<p className='io-error-page__hint'>404</p>
			<p className='io-error-page__message'>对不起,你访问的网页不见了</p>
			<Button type='primary' onClick={() => history.replace('/')}>
				<i className='iconfont icon-left'></i>
				<span>返回上一页</span>
			</Button>
		</div>
	);
};
