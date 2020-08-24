import { MainLayout, MenuSider } from "@ionia/libs";
import { Menu } from "antd";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { useLocation, useHistory } from "react-router-dom";
import routes from "./routes";
import "./App.less";

const App: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleMenuSelect = (item: any) => {
    history.push(item.key);
  };
  const renderMenus = () => {
    return routes.map((m) => (
      <Menu.Item className="io-menu__item" key={m.key}>
        {m.name}
      </Menu.Item>
    ));
  };

  return (
    <MainLayout
      sider={
        <MenuSider>
          <Menu
            className="io-menu"
            selectedKeys={[pathname ?? ""]}
            onSelect={handleMenuSelect}
          >
            {renderMenus()}
          </Menu>
        </MenuSider>
      }
    ></MainLayout>
  );
};

export default hot(App);
