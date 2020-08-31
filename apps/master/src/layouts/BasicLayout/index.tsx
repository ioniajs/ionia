import { useGlobalStore } from "@ionia/libs";
import { Layout } from "antd";
import React from "react";
import Sider from "./components/Sider";
import "./index.less";

const { Content } = Layout;

const BasicLayout: React.FC = ({ children }) => {
  const globalSotre = useGlobalStore();
  return (
    <Layout className="io-layout__basic">
      <Sider apps={globalSotre?.state?.apps ?? []} />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
