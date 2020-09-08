import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import * as React from "react";

export interface AvatarDropdownProps {}

const menus = (
  <Menu onClick={() => {}}>
    <Menu.Item key="center">
      <UserOutlined />
      个人中心
    </Menu.Item>
    <Menu.Item key="settings">
      <SettingOutlined />
      个人设置
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <LogoutOutlined />
      退出登录
    </Menu.Item>
  </Menu>
);

const AvatarDropdown: React.FC<AvatarDropdownProps> = () => {
  return (
    <Dropdown overlay={menus}>
      <Avatar size="small" icon={<UserOutlined />} />
    </Dropdown>
  );
};

export default AvatarDropdown;
