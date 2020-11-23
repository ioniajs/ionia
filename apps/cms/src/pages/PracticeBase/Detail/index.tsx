import React from 'react';
import { BizPage } from '@ionia/libs';
import { BaseDetail } from './detail';

export default ({ match }: any) => {
	const {
		params: { id },
	} = match;
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '实践阵地' }, { name: '编辑' }]}
			tabList={[
				{ tabKey: '1', tab: '基本信息', children: <BaseDetail id={id} /> },
				{ tabKey: '2', tab: '阵地资源', children: <div></div> },
				{ tabKey: '3', tab: '阵地成员', children: <div></div> },
				{ tabKey: '4', tab: '阵地权限', children: <div></div> },
			]}
		/>
	);
};
