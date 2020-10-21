import { Layout } from 'antd';
import React from 'react';

import "./index.less";

const { Sider } = Layout;

export interface MasterSiderProps {
    children: React.ReactNode;
}

const MasterSider = ({ children }: MasterSiderProps) => {
    return (
        <Sider theme="light" width={216} className="io-master__sider">{children}</Sider>
    );
}

export default MasterSider;