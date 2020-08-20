import { Layout, Menu } from "antd";
import React from "react";
import Header from "./components/Header";
import "./index.less";

const { Sider, Content } = Layout;

const BasicLayout: React.FC = ({ children }) => {
  const push = React.useCallback((slave) => {
    history.pushState(null, slave, slave);
  }, []);

  const handleMenuSelect = (item: any) => {
    const slave = item.key;
    history.pushState(null, slave, slave);
  };

  return (
    <Layout className="io-layout">
      <Header />
      <Layout>
        <Sider className="io-sider_menu" theme="light" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["/dashboard"]}
            onSelect={handleMenuSelect}
          >
            <Menu.Item key="/dashboard">仪表盘</Menu.Item>
            <Menu.Item key="/user">用户管理</Menu.Item>
          </Menu>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
