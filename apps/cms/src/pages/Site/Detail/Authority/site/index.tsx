import React from 'react';
import { Tabs } from 'antd';
import Role from './role';

const { TabPane } = Tabs;
const stationGroup = ({ id }: { id: string }) => {
	let roleId = id;

	function callback(key: any) {
		console.log(key);
	}

	return (
		<Tabs onChange={callback} type='card' className='io-cms-role-authority_tabs'>
			<TabPane tab='阵地及角色' key='1'>
				<Role />
			</TabPane>
			<TabPane tab='用户' key='2'>
				<div></div>
			</TabPane>
		</Tabs>
	);
};

export default stationGroup;
