import { useGlobalStore } from '@ionia/libs';
import { Dropdown, Menu, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

const { TabPane } = Tabs;

export interface MasterNavTabProps {}

const MasterNavTab = () => {
	const globalStore = useGlobalStore();
	const currentTab: string = globalStore?.state?.currentTab ?? '/';
	const tabs: any[] = globalStore?.state?.tabs ?? [];

	const [tempKey, setTempKey] = useState<string | null>();

	useEffect(() => {
		globalStore.setState({ currentTab: tempKey });
	}, [tempKey]);

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
											onClick={() => {
												const currentIndex = tabs.findIndex(
													item => item.key === i.key
												);
												const prevTab =
													tabs[
														currentIndex - 1 < 0
															? currentIndex + 1
															: currentIndex - 1
													];
												setTempKey(prevTab.key);
												globalStore.setState({
													tabs: tabs.filter(item => item.key !== i.key),
												});
											}}
											className='iconfont icon-close'
										/>
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

export default MasterNavTab;
