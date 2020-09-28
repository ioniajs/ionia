import { LangSelector, useGlobalStore } from "@ionia/libs";
import { IoniaApp } from "@ionia/libs/es/core/master-application";
import { Menu, Switch } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router";
import AvatarDropdown from "./AvatarDropdown";
import "./index.less";

export interface GlobalHeaderProps {}

export interface RouteMenu {
  key: string;
  name: string;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = () => {
  const globalStore = useGlobalStore();
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();
  const routes: RouteMenu[] =
    globalStore.state?.apps
      ?.filter((app: IoniaApp) => !app.hideInMenu)
      .map((app: IoniaApp) => ({
        key: app.activeRule,
        name: app.name ? t(app.name) : "",
      })) ?? [];
  const selectedKey = routes?.find((r) => location.pathname.startsWith(r.key));

  return (
    <div className="io-global__header">
      <div className="io-global__header-left">
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={selectedKey ? [selectedKey.key] : []}
        >
          {routes.map((r) => (
            <Menu.Item
              key={r.key}
              onClick={(e) => {
                if (selectedKey?.key === e.key) return;
                history.push(e.key.toString());
              }}
            >
              {r.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="io-global__header-right">
        <span className="io-global__header--item">
          <Switch checkedChildren="LTR" unCheckedChildren="RTL" />
        </span>
        <span className="io-global__header--item">
          <AvatarDropdown />
        </span>
        <span className="io-global__header--item">
          <LangSelector />
        </span>
      </div>
    </div>
  );
};

export default GlobalHeader;
