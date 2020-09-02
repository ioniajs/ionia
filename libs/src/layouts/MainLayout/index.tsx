import { Layout } from "antd";
import React, { ReactNode } from "react";
import "./index.less";

const { Content } = Layout;

export interface MenuItem {}

export interface MainLayoutProps {
  children?: ReactNode;
  sider?: ReactNode;
  menus?: MenuItem[];
}

export const MainLayout = ({ children, sider, menus }: MainLayoutProps) => {
  return (
    <Layout className="io-layout__main">
      {sider}
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
