import routes from "@/routes";
import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import React from "react";

export default () => {
  return (
    <PageContainer pageHeaderRender={() => null}>
      <ProCard split="vertical">
        <ProCard title={<div>111</div>} colSpan="30%">
          左侧内容
        </ProCard>
        <ProCard>111</ProCard>
      </ProCard>
    </PageContainer>
  );
};
