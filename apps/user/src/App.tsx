import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import CacheRoute, {
  CacheSwitch,
  getCachingKeys,
} from "react-router-cache-route";
import { useHistory, useLocation } from "react-router-dom";
import routes from "./routes";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => console.log("---", getCachingKeys()), [location.pathname]);

  return (
    <div>
      <Tabs
        onChange={(e) => {
          history.push(e);
        }}
      >
        <TabPane tab="Tab 1" key="/"></TabPane>
        <TabPane tab="Tab 1" key="/detail/1"></TabPane>
        <TabPane tab="Tab 2" key="/category"></TabPane>
      </Tabs>
      <CacheSwitch>
        {routes.map((m: any) => (
          <CacheRoute
            key={m.key}
            cacheKey={m.path}
            exact={m.exact ?? true}
            path={m.path}
            component={m.component}
          />
        ))}
      </CacheSwitch>
    </div>
  );
};

export default hot(App);
