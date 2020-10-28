import { AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined } from '@ant-design/icons';
import { useGlobalStore } from '@ionia/libs';
import { Menu } from 'antd';
import React from 'react';
import routesMap from '../../routes';
import './index.less';

const { SubMenu } = Menu;

const MasterMenu = () => {
	const globalStore = useGlobalStore();
	const routes = routesMap[globalStore.state?.currentApp ?? 'cms'];

	return (
		<div className='io-master__menu'>
			<Menu
				style={{ width: 256 }}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
				theme='light'
			>
				<Menu.Item key='1' icon={<MailOutlined />}>
					Navigation One
				</Menu.Item>
				<Menu.Item key='2' icon={<CalendarOutlined />}>
					Navigation Two
				</Menu.Item>
				<SubMenu key='sub1' icon={<AppstoreOutlined />} title='Navigation Two'>
					<Menu.Item key='3'>Option 3</Menu.Item>
					<Menu.Item key='4'>Option 4</Menu.Item>
					<SubMenu key='sub1-2' title='Submenu'>
						<Menu.Item key='5'>Option 5</Menu.Item>
						<Menu.Item key='6'>Option 6</Menu.Item>
					</SubMenu>
				</SubMenu>
				<Menu.Item key='link' icon={<LinkOutlined />}>
					<a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
						Ant Design
					</a>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default MasterMenu;
