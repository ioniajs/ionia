import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';
import ChangePsdForm from './components';

export interface AvatarDropdownProps {}

const AvatarDropdown: React.FC<AvatarDropdownProps> = () => {
	const history = useHistory();
	const [modalVisible, setModalVisible] = useState(false);
	const onEdit = () => {
		console.log('123');
	};
	const onExit = () => {
		history.replace('/auth');
	};
	const menus = (
		<Menu className='user-info'>
			<div className='info-header'>
				<p className='info-title'>最近登录</p>
				<p>
					<i className='iconfont icon-time-circle'></i>
					<span className='info-time'>2020-11-13</span>
				</p>
				<p>
					<span>IP</span>
					<span className='info-time'>120.12.12</span>
				</p>
			</div>
			<Menu.Divider />
			<div className='info-bottom'>
				<p className='cursor psd' onClick={onEdit}>
					<i className='iconfont icon-edit'></i>
					<span
						onClick={() => {
							setModalVisible(true);
						}}
					>
						修改密码
					</span>
				</p>
				<p className='cursor' onClick={onExit}>
					<i className='iconfont icon-dropout'></i>
					<span>退出登录</span>
				</p>
			</div>
		</Menu>
	);

	return (
		<>
			<Dropdown overlay={menus}>
				<span className='io-master__header--item'>
					<Avatar size='small' icon={<UserOutlined />} />
					<span className='icon-name'>User</span>
				</span>
			</Dropdown>
			<ChangePsdForm
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			></ChangePsdForm>
		</>
	);
};

export default AvatarDropdown;
