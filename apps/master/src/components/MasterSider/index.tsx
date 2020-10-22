import { Layout } from 'antd';
import React from 'react';

import "./index.less";

const { Sider } = Layout;

export interface MasterSiderProps {
    children: React.ReactNode;
}

const MasterSider = ({ children }: MasterSiderProps) => {
    return (
        <div className="io-master__sider-wrapper collapse">
            <Sider theme="light" className="io-master__sider collapse" >
                {children}
            </Sider>
        </div>
    );
}

export default MasterSider;