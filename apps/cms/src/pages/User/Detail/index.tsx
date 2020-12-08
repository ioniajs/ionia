import React from 'react';
import { BizPage, logger } from '@ionia/libs';
import { UserDetail } from './detail';
import UserRight from './user-right';

export default ({ match }: any) => {
	const {
		params: { id },
	} = match;
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '用户管理' }, { name: '编辑' }]}
			tabList={[
				{ tabKey: '1', tab: '基本信息', children: <UserDetail id={id} /> },
				{ tabKey: '2', tab: '用户权限', children: <UserRight id={id} /> },
			]}
		/>
	);
};
