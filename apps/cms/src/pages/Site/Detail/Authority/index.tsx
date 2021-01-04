import React from 'react';
import { BizPage, logger } from '@ionia/libs';
import StationGroup from './StationGroup';
import Site from './site';

export default ({ match }: any) => {
	// const {
	// 	params: { id },
	// } = match;
	const { params } = match;
	const { id }: { id: string } = params;
	return (
		<BizPage
			showActions
			breadcrumbs={[{ name: '站点管理' }, { name: '权限管理' }]}
			tabList={[
				{ tabKey: '1', tab: '站群权限', children: <StationGroup id={id} /> },
				{ tabKey: '2', tab: '站点权限', children: <Site id={id} /> },
			]}
		/>
	);
};
