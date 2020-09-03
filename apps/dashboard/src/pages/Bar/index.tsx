import ChartCol from "@/components/ChartCol";
import { Row } from "antd";
import React from "react";
import { Loading } from "@ionia/libs";
import Loadable from "react-loadable";

const BasicBar = Loadable({
  loader: () => import("./components/Bar"),
  loading: () => <Loading />,
  delay: 300,
});

const RangeBar = Loadable({
  loader: () => import("./components/RangeBar"),
  loading: () => <Loading />,
  delay: 300,
});

const GroupedBar = Loadable({
  loader: () => import("./components/GroupedBar"),
  loading: () => <Loading />,
  delay: 300,
});

const StackedBar = Loadable({
  loader: () => import("./components/StackedBar"),
  loading: () => <Loading />,
  delay: 300,
});

const PercentStackedBar = Loadable({
  loader: () => import("./components/PercentStackedBar"),
  loading: () => <Loading />,
  delay: 300,
});

const Bar = () => {
  return (
    <Row>
      <ChartCol>
        <BasicBar />
      </ChartCol>
      <ChartCol>
        <RangeBar />
      </ChartCol>
      <ChartCol>
        <GroupedBar />
      </ChartCol>
      <ChartCol>
        <StackedBar />
      </ChartCol>
      <ChartCol>
        <PercentStackedBar />
      </ChartCol>
    </Row>
  );
};

export default Bar;
