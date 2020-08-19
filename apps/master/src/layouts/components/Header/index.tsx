import { Layout, Menu } from "antd";
import React from "react";
import "./index.less";
import Logo from "../Logo";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader className="io-header">
      <Logo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">数据中心</Menu.Item>
        <Menu.Item key="2">内容</Menu.Item>
        <Menu.Item key="3">商城</Menu.Item>
        <Menu.Item key="4">政务</Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
