import { useGlobalStore } from "@ionia/libs";
import React from "react";
import "./index.less";

const Logo: React.FC = () => {
  const globalStore = useGlobalStore();
  return (
    <div className="io-sider__logo">
    {globalStore?.state?.title?.toUpperCase()} 
    </div>
  );
};

export default Logo;
