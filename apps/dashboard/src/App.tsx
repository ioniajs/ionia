import DashboardHeader from "@/components/DashboardHeader";
import DashboardStatistics from "@/components/DashboardStatistics";
import { PageContainer } from "@ant-design/pro-layout";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import "./App.less";

const App = () => {
  return (
    <PageContainer
      content={<DashboardHeader />}
      extraContent={<DashboardStatistics />}
    />
  );
};

export default hot(App);
