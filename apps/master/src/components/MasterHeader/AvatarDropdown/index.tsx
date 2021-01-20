import { Avatar, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChangePsdForm from './components';
import './index.less';

export interface AvatarDropdownProps {}

const AvatarDropdown: React.FC<AvatarDropdownProps> = () => {
	const history = useHistory();
	const [modalVisible, setModalVisible] = useState(false);
	const [visible, setVisible] = useState(false);
	const onEdit = () => {
		console.log('123');
	};
	const onExit = () => {
		setVisible(false);
		history.replace('/auth');
	};
	const onVisibleChange = () => {
		setVisible(!visible);
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
			<Dropdown overlay={menus} visible={visible} onVisibleChange={onVisibleChange}>
				<span className='io-master__header--item'>
					<Avatar size={24} src={''} />
					<span className='io-user-name'>超级管理员</span>
				</span>
			</Dropdown>
			<ChangePsdForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</>
	);
};

export default AvatarDropdown;
