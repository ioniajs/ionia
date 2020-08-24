import { Layout } from "antd";
import React, { ReactNode } from "react";
import "./index.less";

const { Content } = Layout;

interface MainLayoutProps {
  children?: ReactNode;
  sider?: ReactNode;
}

export const MainLayout = ({ children, sider }: MainLayoutProps) => {
  return (
    <Layout className="io-layout__main">
      {sider}
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
