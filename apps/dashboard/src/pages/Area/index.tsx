import ChartCol from "@/components/ChartCol";
import { Row } from "antd";
import React from "react";
import { Loading } from "@ionia/libs";
import loadable from "@loadable/component";

const BasicArea = loadable(() => import("./components/Area"), {
  fallback: <Loading />,
});

const StackedArea = loadable(() => import("./components/StackedArea"), {
  fallback: <Loading />,
});

const PercentStackedArea = loadable(
  () => import("./components/PercentStackedArea"),
  { fallback: <Loading /> }
);

const Area = () => {
  return (
    <Row>
      <ChartCol>
        <BasicArea />
      </ChartCol>
      <ChartCol>
        <StackedArea />
      </ChartCol>
      <ChartCol>
        <PercentStackedArea />
      </ChartCol>
    </Row>
  );
};

export default Area;
