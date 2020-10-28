import { useGlobalStore } from '@ionia/libs';
import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routesMap, { IoniaMenuRoute } from '../../routes';
import './index.less';

const { SubMenu } = Menu;

const generateMenus = (menuData: IoniaMenuRoute[]): any => {
	if (menuData && menuData.length > 0) {
		return menuData.map(item => {
			if (item.children && item.children.length > 0) {
				return (
					<SubMenu key={item.path} icon={item.icon} title={item.name}>
						{generateMenus(item.children)}
					</SubMenu>
				);
			}
			return (
				<Menu.Item key={item.path} icon={item.icon}>
					<Link to={item.path}>{item.name}</Link>
				</Menu.Item>
			);
		});
	}
};

const MasterMenu = () => {
	const location = useLocation();
	const globalStore = useGlobalStore();
	const routes = routesMap[globalStore.state?.currentApp ?? 'cms'];

	return (
		<div className='io-master__menu'>
			<Menu
				style={{ width: 256 }}
				mode='inline'
				theme='light'
				selectedKeys={[location.pathname.toString()]}
				defaultOpenKeys={[location.pathname.toString()]}
			>
				{generateMenus(routes)}
			</Menu>
		</div>
	);
};

export default MasterMenu;
