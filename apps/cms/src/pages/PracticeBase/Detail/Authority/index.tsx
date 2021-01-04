import React from 'react';
import { Tabs } from 'antd';
import SiteGroup from './station-group';
import Menu from './menu';
import Site from './site';
import Column from './column';
import Content from './content';
import './index.less';

const { TabPane } = Tabs;
export default ({ id }: { id: string }) => {
	let orgId = id;

	function callback(key: any) {
		console.log(key);
	}

	return (
		<Tabs onChange={callback} type='card' className='io-cms-role-authority_tabs'>
			<TabPane tab='站群权限' key='1'>
				<SiteGroup id={id} />
			</TabPane>
			<TabPane tab='菜单权限' key='2'>
				<Menu orgId={orgId} />
			</TabPane>
			<TabPane tab='站点权限' key='3'>
				<Site id={id} />
			</TabPane>
			<TabPane tab='栏目权限' key='4'>
				<Column id={id} />
			</TabPane>
			<TabPane tab='内容权限' key='5'>
				<Content orgId={orgId} />
			</TabPane>
		</Tabs>
	);
};
