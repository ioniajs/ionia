import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

export interface AvatarDropdownProps {}

const AvatarDropdown: React.FC<AvatarDropdownProps> = () => {
	const history = useHistory();
	const menus = (
		<Menu
			onClick={e => {
				switch (e.key) {
					case 'logout':
						history.push('/auth');
						break;
					default:
						break;
				}
			}}
		>
			<Menu.Item key='center'>
				<UserOutlined />
				个人中心
			</Menu.Item>
			<Menu.Item key='settings'>
				<SettingOutlined />
				个人设置
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='logout'>
				<LogoutOutlined />
				退出登录
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={menus}>
			<Avatar size='small' icon={<UserOutlined />} />
		</Dropdown>
	);
};

export default AvatarDropdown;
