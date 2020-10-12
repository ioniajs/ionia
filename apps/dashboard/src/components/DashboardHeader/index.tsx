import React, { useEffect } from "react";
import "./index.less";

function Bomb() {
  useEffect(() => {
    throw new Error("💥 错误边界测试 💥");
  }, []);
  return <div>Bomb</div>;
}

const DashboardHeader = () => (
  <div className="io-dashboard__header">
    <div className="io-title">概况</div>
    <div className="io-sub-title">
      2020年9月10日星期四，欢迎访问艾欧尼亚控制台
      <Bomb />
    </div>
  </div>
);

export default DashboardHeader;
