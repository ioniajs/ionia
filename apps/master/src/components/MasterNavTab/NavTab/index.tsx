import React from 'react';

interface NacTabProps {
	active?: boolean;
}

const NavTab = ({ active }: NacTabProps) => {
	return (
		<div className={`tab ${active ? 'active' : ''}`}>
			用户管理
			<i className='iconfont icon-close' />
		</div>
	);
};

export default NavTab;
