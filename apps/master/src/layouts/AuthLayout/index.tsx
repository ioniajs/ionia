import { Layout } from "antd";
import React from "react";
import "./index.less";

const { Content } = Layout;

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Layout className="io-layout_auth">
      <Content>{children}</Content>
    </Layout>
  );
};

export default AuthLayout;
