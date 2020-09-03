import React from "react";
import { Spin } from "antd";

export interface LoadingProps {
  loading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading = true }) => (
  <Spin spinning={loading} />
);

export default Loading;
