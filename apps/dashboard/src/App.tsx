import ProLayout from "@ant-design/pro-layout";
import { MenuInfo } from "rc-menu/es/interface";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const selectedApp = React.useMemo(
    () =>
      `/${
        location.pathname
          .split("/")
          .filter((p) => !!p)
          .shift() ?? ""
      }`,
    [location.pathname]
  );

  const handleMenuClick = (path: string) => history.push(path);

  return (
    <ProLayout
      route={{ routes }}
      navTheme="light"
      headerRender={false}
      menuHeaderRender={false}
      disableContentMargin
      siderWidth={100}
      collapsedButtonRender={false}
      menuProps={{
        selectedKeys: [selectedApp],
        onClick: (m: MenuInfo) => handleMenuClick(m.key.toString()),
      }}
    >
      <Switch>
        {routes.map((m) => (
          <Route {...m} />
        ))}
      </Switch>
    </ProLayout>
  );
};

export default hot(App);
