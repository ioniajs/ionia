import React from 'react';
import { BizPage, BizTree } from '@ionia/libs';
import { Tabs } from 'antd';
import { List } from './List';
import { Recycle } from './Recycle';
import { Archive } from './Archive';
import './index.less';

export default () => {
	return (
		<BizPage>
			<div className='io-cms-content-container'>
				<div className='io-cms-content-container__tree'>
					<BizTree />
				</div>
				<div className='io-cms-content-container__content'>
					<Tabs defaultActiveKey='1'>
						<Tabs.TabPane tab='内容页' key='1'>
							<List />
						</Tabs.TabPane>
						<Tabs.TabPane tab='回收站' key='2'>
							<Recycle />
						</Tabs.TabPane>
						<Tabs.TabPane tab='已归档' key='3'>
							<Archive />
						</Tabs.TabPane>
					</Tabs>
				</div>
			</div>
		</BizPage>
	);
};
