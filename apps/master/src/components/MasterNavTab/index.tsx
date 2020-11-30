import { useGlobalStore } from '@ionia/libs';
import { Dropdown, Menu, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import './index.less';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const history = useHistory();
	const location = useLocation();
	const globalStore = useGlobalStore();

	const HOME_TAB = { key: '/cms', name: '首页' };

	const [currentNavTab, setCurrentNavTab] = useLocalStorage('io-current-nav-tab', HOME_TAB.key);
	const [openedNavTabs, setOpenedNavTabs] = useLocalStorage<{ key: string; name: string }[]>(
		'io-opened-nav-tabs',
		[]
	);

	const currentTab: string = globalStore?.state?.currentTab ?? currentNavTab;
	const tabs: any[] = globalStore?.state?.tabs ?? openedNavTabs;

	useEffect(() => {
		if (currentTab) {
			let tabs: any[] = openedNavTabs ?? [];

			if (tabs.findIndex(t => t.key === HOME_TAB.key) < 0) {
				tabs = [HOME_TAB, ...tabs];
			}

			globalStore.setState({
				tabs,
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
	}, [globalStore?.state?.currentTab]);

	const toRemoveTab = (e: any, tab: string, type: string = 'current') => {
		e && e.stopPropagation();

		let nextTab: string = currentTab;
		let newTabs: any[] = [];

		switch (type) {
			case 'all':
				nextTab = HOME_TAB.key;
				newTabs = [HOME_TAB];
				break;
			case 'current':
				if (tab === currentTab) {
					const currentIndex = tabs.findIndex(item => item.key === tab);
					const next =
						tabs[tabs.length > currentIndex + 1 ? currentIndex + 1 : currentIndex - 1];
					nextTab = next.key;
				}
				newTabs = tabs.filter(item => item.key !== tab);
				break;
			case 'other':
				newTabs = [HOME_TAB, ...tabs.filter(item => item.key === tab)];
				if (tab !== currentTab) {
					nextTab = tab;
				}
				break;
		}

		globalStore.setState({
			currentTab: nextTab,
			tabs: newTabs,
		});
		setOpenedNavTabs(
			newTabs.map(t => ({
				key: t.key,
				name: t.name,
			}))
		);
	};

	const onMenuClick = ({ key, domEvent }: any, item: any) => {
		domEvent && domEvent.stopPropagation();
		switch (key) {
			case 'refresh':
				history.replace('/redirect', location.pathname);
				break;
			case 'close-current':
				toRemoveTab(null, item.key);
				break;
			case 'close-other':
				toRemoveTab(null, item.key, 'other');
				break;
			case 'close-all':
				toRemoveTab(null, item.key, 'all');
				break;
			default:
				break;
		}
	};

	const renderMenus = (item: any) => (
		<Menu onClick={e => onMenuClick(e, item)}>
			{item.key === currentTab && (
				<Menu.Item key='refresh'>
					<div>刷新</div>
				</Menu.Item>
			)}
			{item.key !== HOME_TAB.key && (
				<Menu.Item key='close-current'>
					<div>关闭当前页签</div>
				</Menu.Item>
			)}
			<Menu.Item key='close-other'>
				<div>关闭其它页签</div>
			</Menu.Item>
			{item.key !== HOME_TAB.key && (
				<Menu.Item key='close-all'>
					<div>关闭所有页签</div>
				</Menu.Item>
			)}
		</Menu>
	);

	return (
		<div className='io-master__nav-tab'>
			<Tabs
				activeKey={currentTab}
				onChange={key => {
					globalStore.setState({ currentTab: key });
				}}
			>
				{tabs.map((i: any) => (
					<TabPane
						key={i.key}
						tab={
							<Dropdown overlay={() => renderMenus(i)} trigger={['contextMenu']}>
								<span
									className={
										i.key === currentTab ? 'io-master__nav-tab--active' : ''
									}
								>
									{i.name}
									<i
										className='iconfont icon-close'
										onClick={e => toRemoveTab(e, i.key)}
									/>
								</span>
							</Dropdown>
						}
					/>
				))}
			</Tabs>
		</div>
	);
};

export default MasterNavTab;
