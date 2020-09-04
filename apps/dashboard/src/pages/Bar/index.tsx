import ChartCol from "@/components/ChartCol";
import { Row } from "antd";
import React from "react";
import { Loading } from "@ionia/libs";
import loadable from "@loadable/component";

const BasicBar = loadable(() => import("./components/Bar"), {
  fallback: <Loading />,
});

const RangeBar = loadable(() => import("./components/RangeBar"), {
  fallback: <Loading />,
});

const GroupedBar = loadable(() => import("./components/GroupedBar"), {
  fallback: <Loading />,
});

const StackedBar = loadable(() => import("./components/StackedBar"), {
  fallback: <Loading />,
});

const PercentStackedBar = loadable(
  () => import("./components/PercentStackedBar"),
  {
    fallback: <Loading />,
  }
);

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
