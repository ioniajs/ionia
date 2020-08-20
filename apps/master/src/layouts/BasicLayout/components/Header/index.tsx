import { Layout, Menu } from "antd";
import React from "react";
import "./index.less";
import Logo from "../Logo";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const handleMenuSelect = (item: any) => {
    const slave = item.key;
    history.pushState(null, slave, slave);
  };
  return (
    <AntHeader className="io-header">
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/dashboard"]}
        onSelect={handleMenuSelect}
      >
        <Menu.Item key="/dashboard">数据中心</Menu.Item>
        <Menu.Item key="/user">用户中心</Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
