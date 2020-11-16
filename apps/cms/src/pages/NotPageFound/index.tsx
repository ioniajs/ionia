import React from 'react';
import { Layout, Button } from 'antd';
import './index.less';
import { useHistory } from 'react-router-dom';

export default () => {
	const { Content } = Layout;
	const history = useHistory();
	return (
		<Content>
			<div className='io-layout-content'>
				<p>对不起,你访问的网页不见了</p>
				<Button type='primary' onClick={() => history.replace('/')}>
					<i className='iconfont icon-left'></i>
					<span>返回上一页</span>
				</Button>
			</div>
		</Content>
	);
};
