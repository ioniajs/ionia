import React from 'react';
import { BizPage } from '@ionia/libs';
import { UserChildren } from './User';
import { IpChildren } from './Ip';

export default () => {
	return (
		<BizPage
			showActions={true}
			breadcrumbs={[{ name: '评论管理' }, { name: '禁言列表' }]}
			tabList={[
				{ tabKey: '1', tab: '禁言用户', children: <UserChildren /> },
				{ tabKey: '2', tab: '禁言IP', children: <IpChildren /> },
			]}
		/>
	);
};
