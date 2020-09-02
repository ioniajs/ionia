import { Layout } from "antd";
import React from "react";
import Logo from "../Logo";
import "./index.less";

const { Header: AntHeader } = Layout;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  return (
    <div className="io-header">
      <Logo />
    </div>
  );
};

export default Header;
