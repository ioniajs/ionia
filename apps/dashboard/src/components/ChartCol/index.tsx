import { Card, Col } from "antd";
import { CardProps } from "antd/es/card";
import * as React from "react";

interface ChartColProps extends CardProps {}

const ChartCol: React.FC<ChartColProps> = ({ children, ...props }) => (
  <Col xs={{ span: 24 }}>
    <Card {...props} style={{ margin: 10 }}>
      {children}
    </Card>
  </Col>
);

export default ChartCol;
