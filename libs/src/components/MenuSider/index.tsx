import { Layout } from "antd";
import React from "react";
import "./index.less";

const { Sider } = Layout;

const MenuSider: React.FC = ({ children }) => (
  <Sider className="io-layout__main-sider" theme="light" width={140}>
    {children}
  </Sider>
);

export default MenuSider;
