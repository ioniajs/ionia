import React from 'react';
import { Button, Modal, Progress } from 'antd';
import { BizPage, BizTable } from '@ionia/libs';
import './index.less';

const columns = [
	{
		title: '栏目名称',
		key: '',
		dataIndex: '',
	},
	{
		title: '静态页',
		key: '',
		dataIndex: '',
		render: (_: any, row: any) => <i className='iconfont icon-select' />,
	},
];

export const Content = () => {
	return (
		<div className='io-cms-site-publish-content'>
			<BizPage
				showActions={true}
				renderActions={() => (
					<>
						<Button
							type='primary'
							onClick={() => {
								const precent = 30;
								Modal.info({
									title: (
										<span className='io-cms-site-publish-content-title__modal'>
											生成静态页
										</span>
									),
									content: <Progress percent={precent} />,
									okText: '后台运行',
									icon: '',
								});
							}}
							className='io-cms-site-publish-content-generate_but'
						>
							生成内容静态页
						</Button>
						<Button>取消内容静态页</Button>
					</>
				)}
			>
				<BizTable toolBarRender={false} columns={columns} rowSelection={{}} />
			</BizPage>
		</div>
	);
};
