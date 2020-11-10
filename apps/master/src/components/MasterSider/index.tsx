import { useThemeStore } from '@ionia/libs';
import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';

import './index.less';

const { Sider } = Layout;

export interface MasterSiderProps {
	children: React.ReactNode;
}

const MasterSider = ({ children }: MasterSiderProps) => {
	const menuStyles = useThemeStore(state => state.menuStyles);
	const [collapse, setCollapse] = useState(false);

	useEffect(() => {
		setCollapse(menuStyles.collapse);
	}, [menuStyles.collapse]);

	return (
		<div
			className={`io-master__sider-wrapper ${menuStyles.collapse ? 'collapse' : ''}`}
			onMouseEnter={() => {
				if (menuStyles.collapse) {
					setCollapse(false);				
				}
			}}
			onMouseLeave={() => {
				if (menuStyles.collapse) {
					setCollapse(true);
				}
			}}
		>
			<Sider
				className={`io-master__sider ${menuStyles.collapse ? 'collapse' : ''}`}
				theme='light'
				collapsed={collapse}
			>
				{children}
			</Sider>
		</div>
	);
};

export default MasterSider;
