import GlobalHeader from "@/components/GlobalHeader";
import ProLayout, { SettingDrawer } from "@ant-design/pro-layout";
import { BasicLayoutProps } from "@ant-design/pro-layout/es/BasicLayout";
import { isDev, SlaveApp, useGlobalStore } from "@ionia/libs";
import { IoniaApp } from "@ionia/libs/es/core/master-application";
import { MenuInfo } from "rc-menu/es/interface";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { useHistory, useLocation } from "react-router-dom";
import "./App.less";

export interface AppProps {}

const defaultSettings: Partial<BasicLayoutProps> = {
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

  const routes = useMemo(
    () =>
      globalStore.state?.apps.map((app: IoniaApp) => ({
        path: app.activeRule,
        name: app.name ? t(app.name) : "",
        hideInMenu: app.hideInMenu,
      })),
    [globalStore.state?.apps]
  );

  return (
    <CacheSwitch>
      <CacheRoute exact path="/auth">
        <SlaveApp />
      </CacheRoute>
      <CacheRoute path="/">
        <ProLayout
          {...defaultSettings}
          className="io-layout"
          title={globalStore.state?.title}
          rightContentRender={() => <GlobalHeader />}
          location={location}
          route={{
            routes,
          }}
          menuProps={{
            onClick: (m: MenuInfo) => history.push(m.key.toString()),
          }}
        >
          <SlaveApp />
          {isDev && <SettingDrawer />}
        </ProLayout>
      </CacheRoute>
    </CacheSwitch>
  );
};

export default App;
