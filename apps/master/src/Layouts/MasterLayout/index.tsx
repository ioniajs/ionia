import MasterContent from '@/components/MasterContent';
import MasterHeader, { MasterHeaderTheme } from '@/components/MasterHeader';
import MasterNavTab from '@/components/MasterNavTab';
import MasterSider from '@/components/MasterSider';
import { Layout } from 'antd';
import React from 'react';
import "./index.less";

export interface MasterLayoutProps {
    children: React.ReactNode;
    headerTheme?: MasterHeaderTheme;
}

const MasterLayout = ({
    children,
    headerTheme
}: MasterLayoutProps) => {
    return (
        <Layout className="io-layout__master">
            <MasterHeader theme={headerTheme} />
            <Layout>
                <MasterSider>Sider</MasterSider>
                <Layout>
                    <MasterNavTab />
                    <MasterContent>{children}</MasterContent>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default MasterLayout;