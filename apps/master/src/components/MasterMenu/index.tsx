import { useGlobalStore } from '@ionia/libs';
import { Menu } from 'antd';
import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import routesMap, { IoniaMenuRoute } from '../../routes';
import './index.less';

const { SubMenu } = Menu;

const MasterMenu = () => {
	const location = useLocation();
	const globalStore = useGlobalStore();
	const tabs = globalStore?.state?.tabs ?? [];
	const routes = routesMap[globalStore.state?.currentApp ?? 'cms'];

	const generateMenus = (menuData: IoniaMenuRoute[]): ReactNode => {
		if (menuData && menuData.length > 0) {
			return menuData.map(item => {
				if (item.children && item.children.length > 0) {
					return (
						<SubMenu key={item.path} title={item.name} icon={<i className={`iconfont ${item.icon}`} />}>
							{generateMenus(item.children)}
						</SubMenu>
					);
				}
				return (
					<Menu.Item key={item.path} icon={<i className={`iconfont ${item.icon}`}/>} attr-name={item.name}>
						<Link to={item.path}>{item.name}</Link>
					</Menu.Item>
				);
			});
		}
		return null;
	};

	return (
		<div className='io-master__menu'>
			<Menu
				style={{ width: 256 }}
				mode='inline'
				theme='light'
				selectedKeys={[location.pathname.toString()]}
				defaultOpenKeys={[location.pathname.toString()]}
				onClick={(item: any) => {
					if(tabs.findIndex((t: any) => t.key === item.key) < 0) {
						tabs.push({
							...item,
							name: item.item.props['attr-name']
						});	
					}				
					globalStore.setState({
						currentTab: item.key,
						tabs
					});
				}}
			>
				{generateMenus(routes)}
			</Menu>
		</div>
	);
};

export default MasterMenu;
