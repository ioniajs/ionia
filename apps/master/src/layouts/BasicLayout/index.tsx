import { Layout, Menu } from "antd";
import React from "react";
import Header from "./components/Header";
import "./index.less";

const { Sider, Content } = Layout;

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Layout className="io-layout">
      <Header />
      <Layout>
        <Sider className="io-sider_menu" theme="light" width={200}>
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">仪表盘</Menu.Item>
          </Menu>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
