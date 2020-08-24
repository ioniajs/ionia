import React from "react";
import { Layout } from "antd";

import "./index.less";

const { Header, Footer, Sider, Content } = Layout;

export const MainLayout = ({ children }: any) => {
  return (
    <Layout className="io-layout__main">
      <Sider className="io-layout__main-sider" theme="light">
        Sider
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
