import routes from "@/routes";
import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import React from "react";

export default () => {
  return (
    <PageContainer
      title={false}
      breadcrumb={{
        routes: [{ path: "/category", breadcrumbName: "英雄分类" }],
      }}
    >
      <ProCard split="vertical">
        <ProCard title={<div>111</div>} colSpan="30%">
          左侧内容
        </ProCard>
        <ProCard>111</ProCard>
      </ProCard>
    </PageContainer>
  );
};
