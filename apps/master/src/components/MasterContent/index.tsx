import { Layout } from 'antd';
import React from 'react';

import "./index.less";

const { Content } = Layout;

export interface MasterContentProps {
    children: React.ReactNode;
}

const MasterContent = ({ children }: MasterContentProps) => {
    return (
        <Content className="io-master__content">{children}</Content>
    );
}

export default MasterContent;