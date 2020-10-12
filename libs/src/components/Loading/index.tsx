import React from "react";
import { Spin } from "antd";

export interface LoadingProps {
  loading?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ loading = true }) => (
  <Spin spinning={loading} />
);
