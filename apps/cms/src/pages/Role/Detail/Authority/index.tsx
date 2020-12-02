import React from 'react';
import { Tabs } from 'antd';
import SiteGroup from './station-group';
import Menu from './menu';
import Site from './site';
import Column from './column';
import './index.less';

const { TabPane } = Tabs;
export default ({ id }: any) => {
	let roleId = id;
	function callback(key: any) {
		console.log(key);
	}
	return (
		<Tabs onChange={callback} type='card'>
			<TabPane tab='站群权限' key='1'>
				<SiteGroup roleId={roleId} />
			</TabPane>
			<TabPane tab='菜单权限' key='2'>
				<Menu roleId={roleId} />
			</TabPane>
			<TabPane tab='站点权限' key='3'>
				<Site roleId={roleId} />
			</TabPane>
			<TabPane tab='栏目权限' key='4'>
				<Column roleId={roleId} />
			</TabPane>
			<TabPane tab='内容权限' key='5'>
				Content of Tab Pane 3
			</TabPane>
		</Tabs>
	);
};
