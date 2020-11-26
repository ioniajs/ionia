import { useGlobalStore } from '@ionia/libs';
import { useLocalStorage } from 'react-use';
import { Dropdown, Menu, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const history = useHistory();
	const globalStore = useGlobalStore();

	const [currentNavTab, setCurrentNavTab] = useLocalStorage('io-current-nav-tab', '/');
	const [openedNavTabs, setOpenedNavTabs] = useLocalStorage<{ key: string }[]>(
		'io-opened-nav-tabs',
		[]
	);

	const currentTab: string = globalStore?.state?.currentTab ?? currentNavTab;
	const tabs: any[] = globalStore?.state?.tabs ?? openedNavTabs;

	useEffect(() => {
		if (currentTab) {
			history.push(currentTab);
			globalStore.setState({
				tabs: openedNavTabs,
			});
		}
	}, []);

	useEffect(() => {
		history.push(currentTab);
		setCurrentNavTab(currentTab);
		setOpenedNavTabs(
			tabs.map(t => ({
				key: t.key,
				name: t.name,
			}))
		);
	}, [currentTab]);

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

	const toRemoveTab = (tab: string) => {
		const newTabs = tabs.filter(item => item.key !== tab);
		globalStore.setState({
			tabs: newTabs,
		});
		setOpenedNavTabs(
			newTabs.map(t => ({
				key: t.key,
				name: t.name,
			}))
		);
	};

	return (
		<div className='io-master__nav-tab'>
			<Dropdown overlay={menuItems} trigger={['contextMenu']}>
				<Tabs
					activeKey={currentTab}
					onChange={key => {
						globalStore.setState({ currentTab: key });
					}}
				>
					{tabs.map((i: any) => (
						<TabPane
							tab={
								i.key === currentTab ? (
									<span>
										{i.name}
										<i
											className='iconfont icon-close'
											onClick={() => toRemoveTab(i.key)}
										/>
									</span>
								) : (
									<div className='io-master__nav-tab-pane'>
										<span>{i.name}</span>
										<i
											className='iconfont icon-close'
											onClick={() => toRemoveTab(i.key)}
										/>
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

export default MasterNavTab;
