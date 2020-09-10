import { Divider, Statistic } from "antd";
import React from "react";
import "./index.less";

const DashboardStatistics = () => (
  <div className="io-dashboard__statistics">
    <div>
      <Statistic title="待审核开发者" value={8} />
    </div>
    <Divider type="vertical" />
    <div>
      <Statistic title="待审核英雄" value={28} />
    </div>
  </div>
);

export default DashboardStatistics;
