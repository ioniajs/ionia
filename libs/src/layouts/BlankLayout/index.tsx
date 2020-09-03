import { Layout } from "antd";
import React from "react";
import "./index.less";

const { Content } = Layout;

export const BlankLayout: React.FC = ({ children }) => {
  return (
    <Layout className="io-layout__blank">
      <Content>{children}</Content>
    </Layout>
  );
};
