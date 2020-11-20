import React from 'react';
import { BizPage } from '@ionia/libs';
import Message from './message';
import UserRight from './user-right';

export default () => {
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '用户管理' }, { name: '编辑' }]}
			tabList={[
				{ tabKey: '1', tab: '基本信息', children: <Message /> },
				{ tabKey: '2', tab: '用户权限', children: <UserRight /> },
			]}
		/>
	);
};
