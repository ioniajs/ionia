import React, { useState } from 'react';
import { Dropdown, Menu, Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './index.less';
import { useGlobalStore } from '@ionia/libs';
import { render } from 'react-dom';
import { SplitChunksPlugin } from 'webpack';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const globalStore = useGlobalStore();
	const currentTab: string = globalStore?.state?.currentTab ?? '/';
	const tabs: any[] = globalStore?.state?.tabs ?? [];
	console.log(currentTab, 'rrrr');

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
					activeKey={currentTab}
					onChange={key => {
						// setActiveKey(key);
						console.log(key, 'cccc');
						globalStore.setState({currentTab : key})
					}}
				>
					{tabs.map((i: any, index: number) => (
						<TabPane
							tab={
								i.key === currentTab ? (
									<span>
										{i.name}
										<i onClick={ () => {
											// const temp = tabs.filter((t: any) => { return 
											// 	i.key !== t.key
											// });
											// console.log(temp);
											const temp = tabs.splice(index, 1);
											// const last = tabs[0].key;
											// console.log(last, tabs, 'llll');
											// console.log(temp, tabs[tabs.length -1].key, 'ttt');
											// globalStore.setState({ currentTab: tabs[tabs.length -1].key});
											// // console.log(tabs);
											// // console.log(i);
											
											
											}
										} className='iconfont icon-close' />
									</span>									
								) : (
									<div className='io-master__nav-tab-pane'>
										<span>{i.name}</span>
										<i className='iconfont icon-close'></i>
									</div>
								)
							}
							key={i.key}
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
