import React, { useState } from 'react';
import { BizPage } from '@ionia/libs';
import { BasicChildren } from './Basic/index';
import { ExpandChildren } from './Expand/index';
import { useHistory } from 'react-router-dom';
import { TabPaneProps } from 'antd/lib/tabs';
import './index.less';

export default ({ match }: any) => {
	const {
		params: { id },
	} = match;
	const history = useHistory();
	console.log(history, 'hhhh');
	const { location } = history;
	const { state }: any = location;
	return (
		<BizPage
			breadcrumbs={[{ name: '站点管理' }, { name: '编辑' }]}
			showActions={true}
			tabList={[
				{
					tabKey: '1',
					tab: '基本信息',
					children: <BasicChildren id={id} />,
				},
				{ tabKey: '2', tab: '扩展配置', children: <ExpandChildren id={id} /> },
			]}
			defaultActiveKey={state?.tabKey || '1'}
		/>
	);
};
