import GlobalHeader from "@/components/GlobalHeader";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import ProLayout, { MenuDataItem } from "@ant-design/pro-layout";
import { BasicLayoutProps } from "@ant-design/pro-layout/es/BasicLayout";
import { SlaveApp, useGlobalStore } from "@ionia/libs";
import { MenuInfo } from "rc-menu/es/interface";
import React from "react";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { useHistory, useLocation } from "react-router-dom";
import "./App.less";

export interface AppProps {}

const defaultSettings: Partial<BasicLayoutProps> = {
  logo: false,
  headerTitleRender: false,
  layout: "mix",
  contentWidth: "Fluid",
  navTheme: "light",
  fixedHeader: true,
  fixSiderbar: true,
  headerHeight: 48,
  primaryColor: "#1890ff",
  splitMenus: false,
  disableContentMargin: true,
};

export interface SlaveAppRoute {
  key: string;
  menus: MenuDataItem[];
}

const routeMaps: SlaveAppRoute[] = [
  {
    key: "/dashboard",
    menus: [
      {
        name: "仪表盘",
        path: "/dashboard",
        icon: <DashboardOutlined />,
      },
    ],
  },
  {
    key: "/user",
    menus: [
      {
        name: "用户管理",
        path: "/user",
        icon: <UserOutlined />,
      },
      {
        name: "用户分类",
        path: "/user/category",
        icon: <UserOutlined />,
      },
    ],
  },
];

const App: React.FC<AppProps> = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <CacheSwitch>
      <CacheRoute exact path="/auth">
        <SlaveApp />
      </CacheRoute>
      <CacheRoute path="/">
        <ProLayout
          {...defaultSettings}
          className="io-layout"
          rightContentRender={() => <GlobalHeader />}
          location={location}
          menuDataRender={() =>
            routeMaps.find((r) => location.pathname.startsWith(r.key))?.menus ??
            []
          }
          menuProps={{
            onClick: (m: MenuInfo) => history.push(m.key.toString()),
          }}
        >
          <SlaveApp />
        </ProLayout>
      </CacheRoute>
    </CacheSwitch>
  );
};

export default App;
