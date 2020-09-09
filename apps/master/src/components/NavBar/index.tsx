import { ReloadOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Tabs, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./index.less";

const { TabPane } = Tabs;

export interface Route {
  pathname: string;
  state?: any;
  content?: React.ReactNode;
}

const NavBar: React.FC<{}> = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    return history.listen((location) => {
      setRoutes((state) => {
        if (state.findIndex((r) => r.pathname === location.pathname) >= 0) {
          return state;
        }
        return [...state, { ...location }];
      });
    });
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="other">关闭其它</Menu.Item>
      <Menu.Item key="all">关闭所有</Menu.Item>
    </Menu>
  );
  return (
    <div className="io-nav-bar">
      <Tabs
        size="small"
        hideAdd
        type="editable-card"
        tabBarExtraContent={{
          // left: (
          //   <Tooltip title="首页" placement="bottomLeft">
          //     <Button
          //       className="io-btn--home"
          //       type="primary"
          //       icon={<HomeOutlined />}
          //       onContextMenu={(e) => e.stopPropagation()}
          //     />
          //   </Tooltip>
          // ),
          right: (
            <Tooltip title="刷新" placement="bottomRight">
              <Button
                className="io-btn--reload"
                type="primary"
                icon={<ReloadOutlined />}
                onContextMenu={(e) => e.stopPropagation()}
              />
            </Tooltip>
          ),
        }}
        renderTabBar={(props, DefaultTabBar) => (
          <Dropdown overlay={menu} trigger={["contextMenu"]}>
            <div>
              <DefaultTabBar {...props} />
            </div>
          </Dropdown>
        )}
        activeKey={location.pathname}
        onChange={(activeKey: string) => {
          const r = routes.find((r) => r.pathname === activeKey);
          if (r) {
            history.push(r.pathname, r.state);
          }
        }}
      >
        {routes.map((r) => (
          <TabPane
            tab={r.pathname}
            key={r.pathname}
            className="io-container--content"
          >
            {r.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default NavBar;
