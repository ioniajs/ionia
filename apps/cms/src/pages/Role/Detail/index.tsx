import React from 'react';
import { BizPage, logger } from '@ionia/libs';
import Base from './Base';
import Member from './Member';
export default ({ match }: any) => {
	const {
		params: { id },
	} = match;
	logger.debug(id);
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '角色管理' }, { name: '详情页' }]}
			tabList={[
				{ tabKey: '1', tab: '基本信息', children: <Base id={id} /> },
				{ tabKey: '2', tab: '角色成员', children: <Member id={id} /> },
				{ tabKey: '3', tab: '角色权限', children: <div>333</div> },
			]}
		/>
	);
};
