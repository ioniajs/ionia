import { Skeleton, Layout, Menu, Space } from "antd";
import { RegistrableApp } from "qiankun";
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo";
import "./index.less";

const { Header: AntHeader } = Layout;

interface HeaderProps {
  apps: RegistrableApp[];
}

const Header: React.FC<HeaderProps> = ({ apps }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  const handleMenuSelect = (item: any) => {
    const slave = item.key;
    history.pushState(null, slave, slave);
  };

  return (
    <AntHeader className="io-header">
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/dashboard"]}
        onSelect={handleMenuSelect}
      >
        {apps.map((app) => (
          <Menu.Item key={app.activeRule.toString()}>
            {t(app.name, { lng: "zh" })}
          </Menu.Item>
        ))}
      </Menu>
    </AntHeader>
  );
};

export default Header;
