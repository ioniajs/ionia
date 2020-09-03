export * from "./components/Menu";
import { Layout } from "antd";
import React, { ReactNode } from "react";
import { Route, Switch } from "react-router-dom";
import Menu, { MenuItem } from "./components/Menu";
import MenuSider from "./components/MenuSider";
import "./index.less";

const { Content } = Layout;

export interface SlaveLayoutProps {
  sider?: ReactNode;
  menus?: MenuItem[];
}

export const SlaveLayout: React.FC<SlaveLayoutProps> = ({
  sider,
  menus = [],
}: SlaveLayoutProps) => {
  menus = menus.map((m) => {
    m.key = m.path?.toString();
    return m;
  });
  return (
    <Layout className="io-layout__slave">
      {sider ?? (
        <MenuSider>
          <Menu menus={menus} />
        </MenuSider>
      )}
      <Layout>
        <Content>
          <Switch>
            {menus.map((m) => (
              <Route {...m} />
            ))}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
