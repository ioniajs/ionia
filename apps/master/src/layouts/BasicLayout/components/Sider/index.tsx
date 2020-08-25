import { Skeleton, Layout, Menu, Space } from "antd";
import { RegistrableApp } from "qiankun";
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo";
import "./index.less";

const { Sider: AntSider } = Layout;

interface SiderProps {
  apps: RegistrableApp[];
}

const Sider: React.FC<SiderProps> = ({ apps }: SiderProps) => {
  const { t, i18n } = useTranslation();

  const handleMenuSelect = (item: any) => {
    const slave = item.key;
    history.pushState(null, slave, slave);
  };

  return (
    <AntSider className="io-sider" width={80}>
      <Logo />
      <Menu
        className="io-sider__menu"
        theme="dark"
        defaultSelectedKeys={["/dashboard"]}
        onSelect={handleMenuSelect}
      >
        {apps.map((app) => (
          <Menu.Item
            className="io-sider__menu-item"
            key={app.activeRule.toString()}
          >
            {t(app.name, { lng: "zh" })}
          </Menu.Item>
        ))}
      </Menu>
    </AntSider>
  );
};

export default Sider;
