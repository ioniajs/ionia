import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import { BlankLayout, isDev, SlaveApp, useGlobalStore } from "@ionia/libs";
import { IoniaApp } from "@ionia/libs/es/core/master-application";
import { Menu, Dropdown, Button, Avatar } from "antd";
import React, { useMemo } from "react";
import { hot } from "react-hot-loader/root";
import { useTranslation } from "react-i18next";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.less";

interface AppProps {}

const defaultSettings: any = {
  title: "Ionia",
  logo:
    "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",
  navTheme: "dark",
  layout: "side",
  contentWidth: "Fluid",
  fixedHeader: true,
  headerHeight: 48,
  siderWidth: 120,
  primaryColor: "#1890ff",
  splitMenus: false,
  disableContentMargin: true,
};

const App: React.FC<AppProps> = () => {
  const { t } = useTranslation();
  const globalStore = useGlobalStore();
  const history = useHistory();
  const location = useLocation();

  const selectedApp = useMemo(
    () =>
      `/${location.pathname
        .split("/")
        .filter((p) => !!p)
        .shift()}`,
    [location.pathname]
  );

  const routes = useMemo(
    () =>
      globalStore.state?.apps.map((app: IoniaApp) => ({
        path: app.activeRule,
        name: app.name ? t(app.name) : "",
        hideInMenu: app.hideInMenu,
      })),
    [globalStore.state?.apps]
  );

  const menuItemRender = (m: { name: string; path: string }) => (
    <div onClick={() => history.push(m.path)}>{m.name}</div>
  );

  const menus = (
    <Menu onClick={() => {}}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Switch>
      <Route path="/auth">
        <BlankLayout>
          <SlaveApp />
        </BlankLayout>
      </Route>
      <Route path="/">
        <ProLayout
          {...defaultSettings}
          className="io-layout"
          route={{
            routes,
          }}
          menuItemRender={menuItemRender}
          menuProps={{
            selectedKeys: [selectedApp],
          }}
          rightContentRender={() => (
            <Dropdown overlay={menus}>
              <Avatar size="small" icon={<UserOutlined />} />
            </Dropdown>
          )}
        >
          <SlaveApp />
          {isDev && <SettingDrawer />}
        </ProLayout>
      </Route>
    </Switch>
  );
};

export default hot(App);
