import { Menu as AntMenu } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./index.less";

export interface MenuProps {
  routes: any[];
}

const renderMenus = (routes: any[]) => {
  return routes.map((m: any) => (
    <AntMenu.Item className="io-menu__item" key={m.key}>
      {m.name}
    </AntMenu.Item>
  ));
};

const Menu: React.FC<MenuProps> = ({ routes }) => {
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
      {renderMenus(routes)}
    </AntMenu>
  );
};

export default Menu;
