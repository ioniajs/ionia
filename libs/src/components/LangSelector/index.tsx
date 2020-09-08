import { TranslationOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import * as React from "react";

export interface LangSelectorProps {}

const menus = (
  <Menu onClick={() => {}}>
    <Menu.Item key="zh-CN">简体中文</Menu.Item>
    <Menu.Item key="en-US">English</Menu.Item>
  </Menu>
);

const LangSelector: React.FC<LangSelectorProps> = () => {
  return (
    <Dropdown overlay={menus}>
      <TranslationOutlined style={{ fontSize: 18 }} />
    </Dropdown>
  );
};

export default LangSelector;
