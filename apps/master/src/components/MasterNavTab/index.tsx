import React, { useState } from 'react';
import { Dropdown, Menu, Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './index.less';
import { render } from 'react-dom';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const [activeKey, setActiveKey] = useState<string>('1');
	const menuItems = (
		<Menu>
			<Menu.Item>
				<div>刷新</div>
			</Menu.Item>
			<Menu.Item>
				<div>关闭当前页签</div>
			</Menu.Item>
			<Menu.Item>
				<div>关闭所有页签</div>
			</Menu.Item>
		</Menu>
	);
	return (
		<div className='io-master__nav-tab'>
			<Dropdown overlay={menuItems} trigger={['contextMenu']}>
				<Tabs
					defaultActiveKey='1'
					onChange={key => {
						setActiveKey(key);
					}}
				>
					{[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
						<TabPane
							tab={
								i === Number(activeKey) ? (
									<span>
										tab-1
										<i className='iconfont icon-close' />
									</span>
								) : (
									<div className="io-master__nav-tab-pane">
										<span>tab-1</span>
										<i className='iconfont icon-close'></i>
									</div>
								)
							}
							key={i}
							disabled={i === 28}
						/>
					))}
				</Tabs>
			</Dropdown>
		</div>
	);
};
{
	/* <div className='io-master__nav-tab'>
			<div className='extra'>
				<i className='iconfont icon-doubleleft' />
			</div>
			<div className='tabs'>
				<NavTab active />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
				<NavTab />
			</div>
			<div className='extra'>
				<i className='iconfont icon-doubleright' />
			</div>
		</div> */
}

export default MasterNavTab;
