import ProLayout from "@ant-design/pro-layout";
import { MenuInfo } from "rc-menu/es/interface";
import React from "react";
import { hot } from "react-hot-loader/root";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { useHistory, useLocation } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <ProLayout
      logo={false}
      title="英雄"
      navTheme="light"
      breadcrumbRender={() => []}
      headerRender={false}
      siderWidth={120}
      headerTitleRender={false}
      collapsedButtonRender={false}
      disableContentMargin
      location={location}
      route={{
        routes,
      }}
      menuProps={{
        onClick: (m: MenuInfo) => history.push(m.key.toString()),
      }}
    >
      <CacheSwitch>
        {routes.map((m: any) => (
          <CacheRoute
            key={m.path}
            exact={m.exact ?? true}
            path={m.path}
            component={m.component}
          />
        ))}
      </CacheSwitch>
    </ProLayout>
  );
};

export default hot(App);
