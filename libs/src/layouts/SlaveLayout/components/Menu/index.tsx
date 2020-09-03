import { Menu as AntMenu } from "antd";
import React from "react";
import { useHistory, useLocation, RouteProps } from "react-router-dom";
import "./index.less";

export interface MenuItem extends RouteProps {
  key?: string;
}

export interface MenuProps {
  menus: MenuItem[];
}

const renderMenus = (menus: any[]) => {
  return menus.map((m: any) => (
    <AntMenu.Item className="io-menu__item" key={m.key}>
      {m.name}
    </AntMenu.Item>
  ));
};

const Menu: React.FC<MenuProps> = ({ menus }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleMenuSelect = (item: any) => {
    history.push(item.key);
  };

  return (
    <AntMenu
      className="io-menu"
      selectedKeys={[pathname ?? ""]}
      onSelect={handleMenuSelect}
    >
      {renderMenus(menus)}
    </AntMenu>
  );
};

export default Menu;
