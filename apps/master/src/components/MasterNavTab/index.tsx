import { useGlobalStore } from '@ionia/libs';
import { Dropdown, Menu, Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import './index.less';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const history = useHistory();
	const globalStore = useGlobalStore();

	const HOME_TAB = { key: '/', name: '首页' };

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

	const onMenuClick = ({ key }: any) => {
		switch (key) {
			case 'refresh':
				history.replace(currentTab);
				break;
			case 'close-current':
				// toRemoveTab(currentTab);
				break;
			case 'close-other':
				// toRemoveTab(currentTab);
				break;
			case 'close-all':
				globalStore.setState({
					currentTab: HOME_TAB.key,
					tabs: [HOME_TAB],
				});
				break;
			default:
				break;
		}
	};

	const menuItems = (
		<Menu onClick={onMenuClick}>
			<Menu.Item key='refresh'>
				<div>刷新</div>
			</Menu.Item>
			<Menu.Item key='close-current'>
				<div>关闭当前页签</div>
			</Menu.Item>
			<Menu.Item key='close-other'>
				<div>关闭其它页签</div>
			</Menu.Item>
			<Menu.Item key='close-all'>
				<div>关闭所有页签</div>
			</Menu.Item>
		</Menu>
	);

	const toRemoveTab = (e: any, tab: string) => {
		e && e.stopPropagation();

		let nextTab = currentTab;

		if (tab === currentTab) {
			const currentIndex = tabs.findIndex(item => item.key === tab);
			const next = tabs[tabs.length > currentIndex + 1 ? currentIndex + 1 : currentIndex - 1];
			nextTab = next.key;
		}

		const newTabs = tabs.filter(item => item.key !== tab);

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
							key={i.key}
							tab={
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
							}
						/>
					))}
				</Tabs>
			</Dropdown>
		</div>
	);
};

export default MasterNavTab;
