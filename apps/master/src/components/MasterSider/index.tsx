import { useThemeStore } from '@ionia/libs';
import { Layout } from 'antd';
import React from 'react';

import "./index.less";

const { Sider } = Layout;

export interface MasterSiderProps {
    children: React.ReactNode;
}

const MasterSider = ({ children }: MasterSiderProps) => {

    const menuStyles = useThemeStore(state => state.menuStyles);

    return (
        <div className={`io-master__sider-wrapper ${menuStyles.collapse ? 'collapse' : ''}`}>
            <Sider
                theme="light"
                className={`io-master__sider ${menuStyles.collapse ? 'collapse' : ''}`} >
                {children}
            </Sider>
        </div>
    );
}

export default MasterSider;