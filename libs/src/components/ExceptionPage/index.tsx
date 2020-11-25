import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

export interface ExceptionPageProps {
	code?: number;
}

const messages = {
	403: '抱歉，你没有访问权限',
	404: '对不起,你访问的网页不见了',
	500: '服务器出错了，请联系管理员',
};

export const ExceptionPage = ({ code = 404 }: ExceptionPageProps) => {
	const history = useHistory();
	return (
		<div className='io-exception-page'>
			<img src={require(`../../static/images/${code}.png`)} alt='' />
			<p className='io-exception-page__hint'>{code}</p>
			<p className='io-exception-page__message'>{messages[code]}</p>
			<Button type='primary' onClick={() => history.goBack()}>
				<i className='iconfont icon-left'></i>
				<span>返回上一页</span>
			</Button>
		</div>
	);
};
