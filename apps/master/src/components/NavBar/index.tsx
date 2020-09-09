import { HomeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Tabs, Tooltip } from "antd";
import * as React from "react";
import { useHistory } from "react-router-dom";
import "./index.less";

const { TabPane } = Tabs;

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const history = useHistory();
  const menu = (
    <Menu>
      <Menu.Item key="1">关闭其它</Menu.Item>
      <Menu.Item key="2">关闭所有</Menu.Item>
    </Menu>
  );
  return (
    <div className="io-nav-bar">
      <Tabs
        size="small"
        hideAdd
        type="editable-card"
        tabBarExtraContent={{
          left: (
            <Tooltip title="首页" placement="bottomLeft">
              <Button
                className="io-btn--home"
                type="primary"
                icon={<HomeOutlined />}
                onContextMenu={(e) => e.stopPropagation()}
              />
            </Tooltip>
          ),
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
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <TabPane tab={`Tab-${i}`} key={i} className="io-container--content">
            {children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default NavBar;
