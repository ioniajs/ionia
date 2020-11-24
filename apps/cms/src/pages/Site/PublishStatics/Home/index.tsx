import React from 'react';
import { Button, Progress, Modal } from 'antd';
import './index.less';

export const Home = () => {
	return (
		<div className='io-cms-site-publish-home'>
			<Button
				type='primary'
				onClick={() => {
					const precent = 30;
					Modal.info({
						title: (
							<span className='io-cms-site-publish-home-title__modal'>
								生成静态页
							</span>
						),
						content: <Progress percent={precent} />,
						okText: '后台运行',
						icon: '',
					});
				}}
				className='io-cms-site-publish-statics-generate__but'
			>
				生成首页静态页
			</Button>
			<Button>取消首页静态页</Button>
		</div>
	);
};
